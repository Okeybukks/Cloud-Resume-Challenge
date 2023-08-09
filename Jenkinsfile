node {
    stage("Build Stage"){
        def nodeImage = docker.image("node:16.20.1-alpine3.18")
        nodeImage.inside(
           sh "node -v"
        )
    }
}