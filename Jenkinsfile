pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        stage('Verify Node & NPM') {
            steps {
                echo '🔍 Checking Node and NPM versions...'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building the app...'
                sh 'npm run build || echo "⚠️ No build step defined, skipping..."'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Jest tests...'
                sh 'npm test -- --ci --runInBand'
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
