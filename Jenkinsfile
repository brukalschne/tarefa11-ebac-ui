pipeline {
    agent any

    stages {
        stage('Clonar repositorio'){
            steps{
                git branch: 'main', url: 'https://github.com/brukalschne/tarefa11-ebac-ui.git'
            }
        }
        stage('Instalar Dependencias'){
            steps{
                sh 'npm install'
            }
        }
        stage('Executar Testes'){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}