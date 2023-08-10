@Library('shared-library@feature/infra') _
node {

    checkout scmGit(
        branches: [[name: 'feature/infra']],
        userRemoteConfigs: [
            [ url: 'https://github.com/Okeybukks/Cloud-Resume-Challenge.git']
        ])
    notifyBuild("Started")
    try{
        
        stage("Build Stage"){
            sh "npm install"
            sh "CI=false npm run build"

            archiveArtifacts artifacts: "build/**" 
        }
        stage("Deploy to S3"){
            withCredentials([[
                $class: 'AmazonWebServicesCredentialsBinding',
                credentialsId: "AWS_ID",
                accessKeyVariable: "AWS_ACCESS_KEY_ID",
                secretKeyVariable: "AWS_SECRET_ACCESS_KEY"
                ]]){
                    sh "aws s3 sync '\build/ s3://achebeh-bucket"
                    copyArtifacts filter: 'build/**', fingerprintArtifacts: true, projectName: '${JOB_BASE_NAME}', selector: specific ('${BUILD_NUMBER}')    
                } 
        }
    }
    catch(e){
        currentBuild.result = "Failed"
        throw e
    }
    finally{
        notifyBuild(currentBuild.result)
    }
    
}