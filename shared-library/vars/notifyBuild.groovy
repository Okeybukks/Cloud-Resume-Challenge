def call(String buildStatus = "Started"){
    buildStatus = buildStatus ?: "Passed"

    def colorCode = ""
    def subject = "Job: ${env.JOB_NAME} Build Number: ${env.BUILD_NUMBER}"
    def text = ":star: Starting Deployment to s3"
    

    if(buildStatus == "Started"){
        colorCode = "#FFFF00"
    }
    else if(buildStatus == "Passed"){
        colorCode = "#008000"
        text = ":white_check_mark: Deployment to AWS s3 was Successful"
    }
    else{
        colorCode = "#FF0000"
        text = ":x: Deployment Failed"
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
                "text": "*Message:* ${text}"
            ]
        ]
    ]

    slackSend(color: colorCode, channel: "#general", blocks: blocks)
    }