pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/brukalschne/tarefa11-ebac-ui.git'
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat '''set NO_COLOR=1
npm run cy:run'''
            }
        }
    }
}
