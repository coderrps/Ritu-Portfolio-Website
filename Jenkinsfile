pipeline {
    agent any

    environment {
        IMAGE_NAME = 'Portfolio'
        DOCKER_USERNAME = 'ritu888'
        DOCKER_PASSWORD = credentials('bae46c59-7f42-4680-8b58-4720e721054e')
    }

    stages {
label 'docker'        stage("Clone Repository") {
            steps {
                git 'https://github.com/coderrps/Ritu-Portfolio-Website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(${IMAGE_NAME})
                }
            }
        }

        stage('Login to DockeHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'bae46c59-7f42-4680-8b58-4720e721054e') {
                        echo 'Logged in to DockerHub'
                    }
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'bae46c59-7f42-4680-8b58-4720e721054e') {
                        def customImage = docker.build(${IMAGE_NAME})
                        customImage.push("latest")
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Docker Image built and pushed successfully!'
        }
        failure {
            echo 'Build failed'
        }

    }
}