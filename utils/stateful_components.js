/** @jsxImportSource @emotion/react */


import { Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, IconButton as RadixThemesIconButton, Link as RadixThemesLink, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Fragment, useCallback, useContext } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getRefValue, getRefValues, isTrue } from "$/utils/state"
import NextLink from "next/link"
import { Moon as LucideMoon, Sun as LucideSun } from "lucide-react"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { jsx } from "@emotion/react"




export function Dropdownmenu__item_dd3d9dadeff58b50d1ccdb3b962e4bc9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c6a59096936a806b0278515d95789db7 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_project1", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_c6a59096936a806b0278515d95789db7},
"Discord Bot"
,)
  )
}

export function Dropdownmenu__item_05b87df288975240ebb30a221c115f1e () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_836be6d4177d01b04028eabede525125 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_home", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_836be6d4177d01b04028eabede525125},
"Home"
,)
  )
}

export function Dropdownmenu__item_b2b1f4f44bc2415c6feac51834960cc3 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4ff8e79d4c65db1992ba830bd784d7ff = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_about", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_4ff8e79d4c65db1992ba830bd784d7ff},
"About"
,)
  )
}

export function Dropdownmenu__item_8c19b08c04deb84f07c6215f63a1e75a () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_51c88a9fc480fe06a3ea549bafe8af73 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.portfoilo___navigation___state____nav_state.to_contact", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_51c88a9fc480fe06a3ea549bafe8af73},
"Contact"
,)
  )
}

export function Link_6d8ef781efad3969e1ad202c69c43883 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),size:"3"},
jsx(
NextLink,
{href:"https://reflex.dev",passHref:true},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["textAlign"] : "center", ["padding"] : "1em" }),direction:"row",gap:"3"},
"Built with "
,jsx(
"svg",
{"aria-label":"Reflex",css:({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") }),height:"12",role:"img",width:"56",xmlns:"http://www.w3.org/2000/svg"},
jsx("path",{d:"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"},)
,jsx("path",{d:"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"},)
,jsx("path",{d:"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"},)
,jsx("path",{d:"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"},)
,jsx("path",{d:"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"},)
,jsx("path",{d:"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"},)
,jsx(
"title",
{},
"Reflex"
,),),),),)
  )
}

export function Fragment_4735041bcb8d807a384b59168d698006 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
Fragment,
{},
((resolvedColorMode === "light") ? (jsx(
Fragment,
{},
jsx(LucideSun,{},)
,)) : (jsx(
Fragment,
{},
jsx(LucideMoon,{},)
,))),)
  )
}

export function Iconbutton_e7f56d90b282f7e538b4064b01b240b5 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    jsx(
RadixThemesIconButton,
{css:({ ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},
jsx(Fragment_4735041bcb8d807a384b59168d698006,{},)
,)
  )
}

export function Root_c3c4027b2d6bb363ca0d8b8782c25137 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_2be462a98bb2ecd2aac22957013ff984 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.portfoilo___contact___state____contact_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
RadixFormRoot,
{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_2be462a98bb2ecd2aac22957013ff984},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},
jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),name:"first_name",placeholder:"First Name",required:true,type:"text"},)
,jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),name:"last_name",placeholder:"Last Name",type:"text"},)
,),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),name:"email",placeholder:"Your email",type:"email"},)
,jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null, ["width"] : "100%" }),name:"message",placeholder:"Your name",required:true},)
,jsx(
RadixThemesButton,
{type:"submit"},
"Submit"
,),),)
  )
}
