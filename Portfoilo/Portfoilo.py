"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config

from .ui.base import base_page

from . import blog, navigation, pages, contact

class State(rx.State):
    """The app state."""



def index() -> rx.Component:
    # Welcome Page (Index)
    my_child = rx.vstack(
            rx.avatar(src="/Zhod.jpg", fallback="RX", size="8"),
            rx.heading("Hi ~ i'm Zhodzilla", size="9"),
            rx.button(
                "I'm unknow dev",
                color=rx.color_mode_cond(light="white", dark="black"),
                background_color=rx.color_mode_cond(light="black", dark="white"),
            ),
            rx.link(
                rx.button(
                    "Github", 
                    color=rx.color_mode_cond(light="white", dark="black"),
                    background_color=rx.color_mode_cond(light="black", dark="white"),
                    ),
                    href="https://github.com/Zhodzilla",
                    is_external=True,
                    ),
            spacing="5",
            justify="center",
            align="center",
            text_align="center",
            min_height="85vh",
        )
    return base_page(my_child)

app = rx.App()
app.add_page(index)
app.add_page(pages.about_page, route=navigation.routes.ABOUT_ROUTE)
app.add_page(pages.project_page, route=navigation.routes.PROJOECT_1_ROUTE)
app.add_page(contact.Contact_page, route=navigation.routes.CONTACT_ROUTE)
app.add_page(contact.contact_entries_list_page, 
             route=navigation.routes.CONTACT_ENTRIES_ROUTE,
             on_load=contact.ContactState.list_entries
             )