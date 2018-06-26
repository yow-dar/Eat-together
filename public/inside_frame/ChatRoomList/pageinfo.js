var control_settings = {
    'title' : '聊天室',
    'fullscreen': 0,
    '#header' : {
        show : 1,
        controls : {
            '#back_btn' : {
                show : 0
            },
            '#search_btn' : {
                show : 1
            }
        }
    },
    '#footer' : {
        show : 1,
        controls : {
            '#home_btn_img' : {
                imgsrc : './img/footer/home_btn.png'
            },
            '#chat_btn_img' : {
                imgsrc : './img/footer/chat_selected_btn.png'
            },
            '#profile_btn_img' : {
                imgsrc : './img/footer/profile_btn.png'
            }
        }
    },
}

adjustControls();