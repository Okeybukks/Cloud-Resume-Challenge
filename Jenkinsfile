@Library('shared-library@feature/infra') _
node {

    notifyBuild("Started")
    try{
        
        stage("Build Stage"){
            sh "pwd"
            sh "ls"
            // dir('./'){
                
            // }
            // sh "npm -v"
            // sh "npm install"
            // sh "export NODE_OPTIONS=--openssl-legacy-provider"
            // sh "npm run build"

            // archiveArtifacts artifacts: "build" 
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