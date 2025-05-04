import reflex as rx

from ..ui.base import base_page

def about_page() -> rx.Component:
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("About", size="9"),
            rx.text(
                "I graduate with art degree to be specific it digital art and it not working out so well. " \
                "I want to try coding for a while now and that make me start self learn how to code. " \
                "I been learning for 2-3 month and have a simple knowledge of python, Linux, git and Docker." \
                " And now i want to take the knowledge i have learned and develop it further.",
            ),
            spacing="5",
            justify="center",
            align="center",
            min_height="85vh",
        )
    return base_page(my_child)

