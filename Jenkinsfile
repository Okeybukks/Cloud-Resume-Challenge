@Library('shared-library@feature/infra') _
node {

    // slackSend color: "good", message: "Starting Deployment to s3"
    notifyBuild("Started")
    try{
        
        stage("Build Stage"){
        def nodeImage = docker.image("node:lts-alpine")
        nodeImage.inside{
           sh "node55 -v"
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