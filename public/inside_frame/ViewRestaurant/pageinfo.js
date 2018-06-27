var control_settings = {
    'title' : '餐廳',
    'fullscreen' : 3,
    '#header' : {
        show : 1,
        controls : {
            '#back_btn' : {
                show : 1
            },
            '#search_btn' : {
                show : 0
            }
        }
    },
    '#footer' : {
        show : 0,
        controls : {
            '#home_btn_img' : {
                imgsrc : './img/footer/home_selected_btn.png'
            },
            '#chat_btn_img' : {
                imgsrc : './img/footer/chat_btn.png'
            },
            '#profile_btn_img' : {
                imgsrc : './img/footer/profile_btn.png'
            }
        }
    },
}

adjustControls();