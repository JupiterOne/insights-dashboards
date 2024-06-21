#!groovy

pipeline {
  agent none

  stages {
    stage('build') {
      agent { label 'ecs-builder-node18' }
      steps {
        initBuild()
        frozenYarnInstall()
        sh 'yarn build'

        script {
          if (env.BRANCH_NAME == 'main') {
            // publish new package version if updated
            publishNewNpmVersionIfAny('dist/package.json', '.dist/')
          }
        }
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
