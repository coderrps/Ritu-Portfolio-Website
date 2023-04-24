pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Checkout the code from Git repository
                git branch: 'main', url: 'https://github.com/coderrps/Ritu-Portfolio-Website.git'
                
                // Build the Docker image and tag it with the commit hash
                script {
                    def image = docker.build("ritu-portfolio:${env.BUILD_ID}")
                    sh "docker tag ${image.id} ritu-portfolio:latest"
                }
            }
        }
        
        stage('Deploy') {
            environment {
                KUBECONFIG = credentials('kubeconfig')
            }
            
            steps {
                // Deploy the website to Kubernetes
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
