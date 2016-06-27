$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        if (currentScene === 0) {
            currentScene = 1;
            scene = {
                message: "你要送哪一首祝福的詩給她呢?",
                yesButtonMessage: "桃夭",
                noButtonMessage: "靜女",
                yesButtonShow: true,
                noButtonShow: true
            };
        } 
        else if (currentScene === 1) {
            if (decision === 1) {
                currentScene = 2;
                scene = {
                    message: "身為魯蛇的你，竟在此時接到了兵單，這時候的你會如何選擇呢?",
                    yesButtonMessage: "秦風‧無衣",
                    noButtonMessage: "小雅‧采薇",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
            else {
                    currentScene = 3;
                    scene = {
                        message: "私奔成功！?",
                        //yesButtonMessage:// ,
                        //noButtonMessage:// ,
                        //yesButtonShow:// ,
                        //noButtonShow:// 
                    };
                }
        }
        

        else if (currentScene === 2) {
            if (decision === 1) {
                currentScene = 4;
                scene = {
                    message: "",
                    yesButtonMessage: "魏風‧碩鼠",
                    noButtonMessage: "鄘風‧相鼠",
                    yesButtonShow: true,
                    noButtonShow: true
                };
            }
            if (decision === 2) {
                currentScene = 5;
                scene = {
                    message: "",
                   // yesButtonMessage: "采薇A1",//
                   // noButtonMessage: "采薇A2",//
                   // yesButtonShow: true,//
                  //  noButtonShow: true//
                };
            }
        }

        else if (currentScene === 4) {
            if (decision === 1) {
                currentScene = 6;
                scene = {
                    message: "碩鼠結局",
                   // yesButtonMessage: "XX",//
                   // noButtonMessage: "XXX",//
                   // yesButtonShow: true,//
                   // noButtonShow: true//
                };
            }
            else{
                currentScene = 7;
                scene = {
                    message: "相鼠結局",
                    //yesButtonMessage: "XXX",//
                    //noButtonMessage: "XXX",//
                   // yesButtonShow: true,//
                   // noButtonShow: true//
                };
            }
        }

    
        
        
        
        //決定完之後 重新繪製畫面
        render(scene);
    }

    // 繪製畫面的函數
    function render(scene) {
        $message.text(scene.message);
        $yesButton.text(scene.yesButtonMessage);
        $noButton.text(scene.noButtonMessage);
        // 場景決定要不要顯示yesButton
        if (scene.yesButtonShow)
            $yesButton.show();
        else
            $yesButton.hide();
        // 場景決定要不要顯示noButton
        if (scene.noButtonShow)
            $noButton.show();
        else
            $noButton.hide();

        $("#scene").attr("src", "images/" + currentScene + ".jpg");
    }

    var scene = {
        message: "回到詩經時代",
        yesButtonMessage: "穿越時空",
        noButtonMessage: "",
        yesButtonShow: true,
        noButtonShow: false
    };
    var currentScene = 0;

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    // 當按下Yes的時候 使用決定參數1
    $yesButton.click(function () {
        makeDecision(1);
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
    });

    render(scene);
});