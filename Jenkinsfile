pipeline {
  agent {
    docker {
      image 'node:8'
    }

  }
  stages {
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
}