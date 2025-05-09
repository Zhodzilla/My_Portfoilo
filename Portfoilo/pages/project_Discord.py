import reflex as rx

from ..ui.base import base_page

def project_page() -> rx.Component:
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("Discord Bot", size="9"),
            rx.box(
                rx.text("This is one of my first project after i learn Python this bot use web scraping to pull the info it need and store in the .json file," \
                " i can use commands to call for info i need it might not be perfect for now so i can use this project to improve my python skill further."
                ),
                padding="1em",
                border_width="3px",
                justify="center",
                align="center",
                width="50%",
                    ),

            rx.hstack(
                rx.image(
                    src="/project_1.jpg", 
                    width="100%", 
                    hight="auto"
                    ),
                rx.image(
                    src="/project_2.jpg", 
                    width="100%", 
                    hight="auto"
                    ),
                rx.image(
                    src="/project_3.jpg", 
                    width="100%", 
                    hight="auto",
                    max_width="600px",
                    object_fit="contain",
                    ),
                
                justify="center",  # center horizontally
                spacing="4",       # space between images
                width="100%",
                max_width="600px",
                margin="auto",     # center the row itself on the page
                overflow="hidden",
                wrap="wrap",
                ),
            
            spacing="5",
            justify="center",
            align="center",
            min_height="85vh",
            wrap="wrap",
        )
    return base_page(my_child)