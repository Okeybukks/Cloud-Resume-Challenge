node {
    stage("Build Stage"){
        def nodeImage = docker.image("node")
        nodeImage.inside{
           sh "node -v"
        }
    }
}