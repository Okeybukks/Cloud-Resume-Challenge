def call(String buildStatus = "Started"){
    buildStatus = buildStatus ?: "Passed"

    def colorCode = ""
    def subject = "Job: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}"
    def text = "Starting Deployment to s3"
    

    if(buildStatus == "Started"){
        colorCode = "#FFFF00"
    }
    else if(buildStatus == "Passed"){
        colorCode = "#008000"
        text = "Deployment to AWS s3 was Successful"
    }
    else{
        colorCode = "#FF0000"
        text = "Deployment Faile"
    }


    blocks = [
        [
            "type": "section",
            "text": [
                "type": "mrkdwn",
                "text": "*Subject:* ${subject}"
            ]
        ],
        [
            "type": "divider"
        ],
        [
            "type": "section",
            "text": [
                "type": "mrkdwn",
                "text": "*Message:* ${text}\n\n"
            ]
        ]
    ]

    slackSend(color: colorCode, channel: "#general", blocks: blocks)
    }