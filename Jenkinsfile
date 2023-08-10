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
            // sh "export NODE_OPTIONS=--openssl-legacy-provider"
            sh "npm run build --openssl-legacy-provider"

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