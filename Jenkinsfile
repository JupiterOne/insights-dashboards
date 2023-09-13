#!groovy

pipeline {
  agent none

  stages {
    stage('build') {
      agent { label 'ecs-builder-node14' }
      steps {
        initBuild()
        frozenYarnInstall()
        sh 'yarn build'

        script {
          if (env.BRANCH_NAME == 'main') {
            // publish new package version if updated
            publishNewNpmVersionIfAny('dist/package.json', 'dist')
          }
        }
      }
    }
    stage('dev-deploy') {
      when {
        not {
          branch 'main'
        }
       }
      agent { label 'ecs-builder-node14' }
      steps {
        deployToEnvironment(environment: 'jupiterone-dev')
      }
    }
    stage('deploy') {
      when { branch 'main' }
      agent { label 'ecs-builder-node14' }
      steps {
        deployToJupiterEnvironments (
          autoPopulateCM: [jiraComponent: 'Cloud Platform']
        )
      }
    }
  }
  post {
    failure {
      script {
        notifyUser(
          channel: "#alert-sre"
        )
      }
    }
  }
}
