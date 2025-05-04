import reflex as rx

from ..ui.base import base_page

def project_page() -> rx.Component:
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("Discord Bot", size="9"),
            rx.text(""),
            rx.hstack(
                rx.image(
                    src="/project_1.jpg", 
                    width="100px", 
                    height="auto"
                    ),
                    
                    
                    
                    
                    
                    
                    ),

            spacing="3",
            justify="center",
            align="center",
            direction="row",
            hight="auto",
        )
    return base_page(my_child)