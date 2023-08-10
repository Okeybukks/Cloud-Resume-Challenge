@Library('shared-library@feature/infra') _
node {

    // slackSend color: "good", message: "Starting Deployment to s3"
    notifyBuild("Started")
    try{
        
        stage("Build Stage"){
        def nodeImage = docker.image("node:lts-alpine")
        nodeImage.inside{
           sh "npm install"
           sh "export NODE_OPTIONS=--openssl-legacy-provider"
           sh "npm run build"
           
        }
        archiveArtifacts artifacts: "build" 
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