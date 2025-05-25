/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { ChevronDown as LucideChevronDown, Menu as LucideMenu, Moon as LucideMoon, Sun as LucideSun } from "lucide-react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import NextHead from "next/head"



export function Dropdownmenu__item_d413f776132f4c34f7b0cefce4319599 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4ff8e79d4c65db1992ba830bd784d7ff = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_about", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_4ff8e79d4c65db1992ba830bd784d7ff}>

{"About"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_982a1c1fa968793cf8317c77000f4be9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_836be6d4177d01b04028eabede525125 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_home", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_836be6d4177d01b04028eabede525125}>

{"Home"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_94fa1776b4d9ce1635fa3df41c3eea50 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c6a59096936a806b0278515d95789db7 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_project1", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_c6a59096936a806b0278515d95789db7}>

{"Discord Bot"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_735f91831f8d11ee7bc8567b0e8e1d6b () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_51c88a9fc480fe06a3ea549bafe8af73 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_contact", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_51c88a9fc480fe06a3ea549bafe8af73}>

{"Contact"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Iconbutton_4d0007ad07e3449e3162c9024cac3907 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_ea9b5a5bdd407a583f7d3e04c058741a/>
</RadixThemesIconButton>
  )
}

export function Fragment_ea9b5a5bdd407a583f7d3e04c058741a () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <Fragment>

{(resolvedColorMode === "light") ? (
  <Fragment>

<LucideSun css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_e61c3d7cba79d2ee9269c3e7fdc2d6bf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg aria-label={"Reflex"} css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} height={"12"} role={"img"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
<title>

{"Reflex"}
</title>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<RadixThemesBox css={({ ["background"] : "var(--accent-3)", ["padding"] : "1em", ["width"] : "100%" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Zhod.jpg"}/>
<RadixThemesHeading size={"7"} weight={"bold"}>

{""}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"5"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Home"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/about"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"About"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesDropdownMenu.Root>

<RadixThemesDropdownMenu.Trigger>

<RadixThemesButton css={({ ["weight"] : "medium" })} size={"3"} variant={"ghost"}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Project"}
</RadixThemesText>
<LucideChevronDown css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_94fa1776b4d9ce1635fa3df41c3eea50/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesText as={"p"} size={"4"} weight={"medium"}>

{"Contact"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/logo.jpg"}/>
<RadixThemesHeading size={"6"} weight={"bold"}>

{"Reflex"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenu css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_982a1c1fa968793cf8317c77000f4be9/>
<RadixThemesDropdownMenu.Sub>

<RadixThemesDropdownMenu.SubTrigger>

{"Project"}
</RadixThemesDropdownMenu.SubTrigger>
<RadixThemesDropdownMenu.SubContent>

<Dropdownmenu__item_94fa1776b4d9ce1635fa3df41c3eea50/>
</RadixThemesDropdownMenu.SubContent>
</RadixThemesDropdownMenu.Sub>
<Dropdownmenu__item_d413f776132f4c34f7b0cefce4319599/>
<Dropdownmenu__item_735f91831f8d11ee7bc8567b0e8e1d6b/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["width"] : "100%" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["minHeight"] : "85vh" })} direction={"column"} justify={"center"} gap={"5"}>

<RadixThemesAvatar fallback={"RX"} size={"8"} src={"/Zhod.jpg"}/>
<RadixThemesBox css={({ ["padding"] : "1em", ["borderWidth"] : "3px", ["justify"] : "center", ["align"] : "center", ["width"] : "50%" })}>

<RadixThemesHeading size={"9"}>

{"About"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{"I graduate with art degree to be specific it digital art and it not working out so well. I want to try coding for a while now and that make me start self learn how to code. I been learning for 2-3 month and have a simple knowledge of python, Linux, git and Docker. And now i want to take the knowledge i have learned and develop it further."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<Link_e61c3d7cba79d2ee9269c3e7fdc2d6bf/>
</RadixThemesFlex>
<Iconbutton_4d0007ad07e3449e3162c9024cac3907/>
</Fragment>
<NextHead>

<title>

{"Portfoilo | About"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
