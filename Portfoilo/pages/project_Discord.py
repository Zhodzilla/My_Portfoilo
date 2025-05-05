import reflex as rx

from ..ui.base import base_page

def project_page() -> rx.Component:
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("Discord Bot", size="9"),
            rx.text("This is one of my first project after i learn Python this bot use web scraping to pull the info it need and store in the .json file," \
            " i can use commands to call for info i need it might not be perfect for now so i can use this project to improve my python skill further."
            ),
            rx.stack(
                rx.image(
                    src="/project_1.jpg", 
                    width="100px", 
                    hight="auto"
                    ),
                rx.image(
                    src="/project_3.jpg", 
                    width="100px", 
                    hight="auto"
                    ),
                rx.image(
                    src="/project_2.jpg", 
                    width="100px", 
                    hight="auto"
                    ),
                
                direction="row",
                spacing="3",
                align="center",
                justify="center"
                ),
            
            spacing="5",
            justify="center",
            align="center",
            text_align="center",
            min_height="85vh",
        )
    return base_page(my_child)