node {

    // slackSend color: "good", message: "Starting Deployment to s3"

    try{
        notifyBuild("Started")
        stage("Build Stage"){
        def nodeImage = docker.image("node:lts-alpine")
        nodeImage.inside{
           sh "node -v"
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

def notifyBuild(String buildStatus = "Started"){
        buildStatus = buildStatus ?: "Passed"

        def colorCode = ""
        def subject = "Job: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}"
        def text = "The current has ${buildStatus}. Job Info: ${subject}"

        if(buildStatus == "Started"){
            colorCode = "#FFFF00"
        }
        else if(buildStatus == "Passed"){
            colorCode = "#008000"
        }
        else{
            colorCode = "#FF0000"
        }

        slackSend(color: color, channel: "#general", message: text)
    }