#!groovy

pipeline {
  agent none

  stages {
    stage('build') {
      // when { branch 'main' }
      agent { label 'ecs-builder-node14' }
      steps {
        initBuild()
        sh 'yarn'
        sh 'yarn build'
        sh 'cp -r dist ./deploy'
        sh 'jupiterone-build'
        sh 'jupiterone-publish'
      }
    }
    stage('deploy') {
      // when { branch 'main' }
      agent { label 'ecs-builder-node14' }
      steps {
        deployToJupiterEnvironments (
          autoPopulateCM: [jiraComponent: 'Cloud Platform']
        )
      }
    }

  }
}
