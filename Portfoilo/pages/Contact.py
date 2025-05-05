import reflex as rx

from ..ui.base import base_page


def Contact_page() -> rx.Component:
    # Welcome Page (Index)
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("Contact", size="9"),
            rx.text("Contact ! Zhodzilla !"),
            
            spacing="5",
            justify="center",
            align="center",
            text_align="center",
            min_height="85vh",
        )
    return base_page(my_child)