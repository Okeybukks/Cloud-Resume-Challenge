node {
    stage("Build Stage"){
        def nodeImage = docker.image("node:lts-alpine")
        nodeImage.inside{
           sh "node -v"
        }

        slackSend color: "good", message: "Message from Jenkins Pipeline"
    }
}