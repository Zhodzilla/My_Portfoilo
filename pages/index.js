/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { ChevronDown as LucideChevronDown, Menu as LucideMenu } from "lucide-react"
import { Dropdownmenu__item_05b87df288975240ebb30a221c115f1e, Dropdownmenu__item_8c19b08c04deb84f07c6215f63a1e75a, Dropdownmenu__item_b2b1f4f44bc2415c6feac51834960cc3, Dropdownmenu__item_dd3d9dadeff58b50d1ccdb3b962e4bc9, Iconbutton_e7f56d90b282f7e538b4064b01b240b5, Link_6d8ef781efad3969e1ad202c69c43883 } from "$/utils/stateful_components"
import { ColorModeContext } from "$/utils/context"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Button_afa927bc33b2c9625a660d7e07a78766 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
RadixThemesButton,
{css:({ ["color"] : ((resolvedColorMode === "light") ? "white" : "black"), ["backgroundColor"] : ((resolvedColorMode === "light") ? "black" : "white") })},
"I'm unknow dev"
,)
  )
}

export function Link_4a1259d48b1c38e48ba5dfd1772eb789 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),target:(true ? "_blank" : "")},
jsx(
NextLink,
{href:"https://github.com/Zhodzilla",passHref:true},
jsx(
RadixThemesButton,
{css:({ ["color"] : ((resolvedColorMode === "light") ? "white" : "black"), ["backgroundColor"] : ((resolvedColorMode === "light") ? "black" : "white") })},
"Github"
,),),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "var(--accent-3)", ["padding"] : "1em", ["width"] : "100%" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx("img",{css:({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/Zhod.jpg"},)
,jsx(
RadixThemesHeading,
{size:"7",weight:"bold"},
""
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",justify:"end",gap:"5"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
NextLink,
{href:"/",passHref:true},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"Home"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
NextLink,
{href:"/about",passHref:true},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"About"
,),),),jsx(
RadixThemesDropdownMenu.Root,
{},
jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(
RadixThemesButton,
{css:({ ["weight"] : "medium" }),size:"3",variant:"ghost"},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"Project"
,),jsx(LucideChevronDown,{},)
,),),jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(Dropdownmenu__item_dd3d9dadeff58b50d1ccdb3b962e4bc9,{},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
NextLink,
{href:"/contact",passHref:true},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"Contact"
,),),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx("img",{css:({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/logo.jpg"},)
,jsx(
RadixThemesHeading,
{size:"6",weight:"bold"},
"Reflex"
,),),jsx(
RadixThemesDropdownMenu.Root,
{css:({ ["justify"] : "end" })},
jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(LucideMenu,{size:30},)
,),jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(Dropdownmenu__item_05b87df288975240ebb30a221c115f1e,{},)
,jsx(
RadixThemesDropdownMenu.Sub,
{},
jsx(
RadixThemesDropdownMenu.SubTrigger,
{},
"Project"
,),jsx(
RadixThemesDropdownMenu.SubContent,
{},
jsx(Dropdownmenu__item_dd3d9dadeff58b50d1ccdb3b962e4bc9,{},)
,),),jsx(Dropdownmenu__item_b2b1f4f44bc2415c6feac51834960cc3,{},)
,jsx(Dropdownmenu__item_8c19b08c04deb84f07c6215f63a1e75a,{},)
,),),),),),jsx(
RadixThemesBox,
{css:({ ["padding"] : "1em", ["width"] : "100%" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["textAlign"] : "center", ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},
jsx(RadixThemesAvatar,{fallback:"RX",size:"8",src:"/Zhod.jpg"},)
,jsx(
RadixThemesHeading,
{size:"9"},
"Hi ~ i'm Zhodzilla"
,),jsx(Button_afa927bc33b2c9625a660d7e07a78766,{},)
,jsx(Link_4a1259d48b1c38e48ba5dfd1772eb789,{},)
,),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},
jsx(Link_6d8ef781efad3969e1ad202c69c43883,{},)
,),jsx(Iconbutton_e7f56d90b282f7e538b4064b01b240b5,{},)
,),jsx(
NextHead,
{},
jsx(
"title",
{},
"Portfoilo | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
