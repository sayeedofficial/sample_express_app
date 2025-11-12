pipeline {
    agent any

    environment {
        NODE_VERSION = '22.21.0'  // Set your preferred Node version
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code...'
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                echo '🧰 Setting up Node.js environment...'
                sh 'node -v || curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm ci' // faster and cleaner than npm install for CI
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building the project...'
                // For plain Express apps, this might just validate syntax
                // Add your build step here if using TypeScript or bundlers
                sh 'npm run build || echo "No build script defined, skipping..."'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Jest tests...'
                sh 'npm test -- --ci --runInBand'
            }
            post {
                always {
                    echo '📊 Test stage completed.'
                    junit allowEmptyResults: true, testResults: '**/test-results/*.xml'
                }
            }
        }
    }

    post {
        success {
            echo '✅ CI pipeline completed successfully!'
        }
        failure {
            echo '❌ CI pipeline failed!'
        }
    }
}
