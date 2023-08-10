def cal(String buildStatus = "Started"){
    buildStatus = buildStatus ?: "Passed"

    def colorCode = ""
    def subject = "Job: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}"
    def text = ""
    def blocks = [
        [
            "type": "section",
            "text": [
                "type": "mrkdown"
                "text": "*Subject:* ${subject}"
            ]
        ],
        [
            "type": "divider"
        ]
        [
            "type": "section",
            "text": [
                "type": "mrkdown"
                "text": "*Message:* ${text}"
            ]
        ]
    ]

    if(buildStatus == "Started"){
        colorCode = "#FFFF00"
        text = "Starting Deployment to s3"
    }
    else if(buildStatus == "Passed"){
        colorCode = "#008000"
        text = "Deployment to AWS s3 was Successful"
    }
    else{
        colorCode = "#FF0000"
        text = "Deployment Faile"
    }

    slackSend(color: colorCode, channel: "#general", blocks: blocks)
    }