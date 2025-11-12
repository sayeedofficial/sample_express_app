pipeline {
    agent any

    environment {
        NODE_VERSION = 'v22.21.0'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        stage('Install Node.js (User Space)') {
            steps {
                echo "⬇️ Installing Node.js ${NODE_VERSION} locally..."
                sh '''
                    # Download and extract Node.js to the workspace
                    curl -fsSL https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.xz -o node.tar.xz
                    mkdir -p $WORKSPACE/node
                    tar -xf node.tar.xz -C $WORKSPACE/node --strip-components=1

                    # Verify installation
                    export PATH=$WORKSPACE/node/bin:$PATH
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh '''
                    export PATH=$WORKSPACE/node/bin:$PATH
                    npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building the app...'
                sh '''
                    export PATH=$WORKSPACE/node/bin:$PATH
                    npm run build || echo "⚠️ No build step defined, skipping..."
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Jest tests...'
                sh '''
                    export PATH=$WORKSPACE/node/bin:$PATH
                    npm test -- --ci --runInBand
                '''
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
