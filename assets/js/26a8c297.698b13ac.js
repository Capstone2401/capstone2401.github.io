"use strict";(self.webpackChunkdataloaf=self.webpackChunkdataloaf||[]).push([[1239],{6235:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=l(4848),a=l(8453);const i={},r="CLI",o={id:"api/cli",title:"CLI",description:"The DataLoaf CLI is a command-line interface tool designed to simplify the deployment and management of DataLoaf infrastructure on AWS.",source:"@site/docs/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/docs/api/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/data-loaf/data-loaf.github.io/tree/main/docs/api/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Node SDK",permalink:"/docs/api/sdk"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage:",id:"usage",level:4},{value:"Available Commands:",id:"available-commands",level:4},{value:"Flags:",id:"flags",level:4},{value:"Example:",id:"example",level:4},{value:"Deploy DataLoaf Infrastructure to AWS",id:"deploy-dataloaf-infrastructure-to-aws",level:3},{value:"Usage:",id:"usage-1",level:4},{value:"Flags:",id:"flags-1",level:4},{value:"Example:",id:"example-1",level:4},{value:"Remove All Currently Provisioned Infrastructure",id:"remove-all-currently-provisioned-infrastructure",level:3},{value:"Usage:",id:"usage-2",level:4},{value:"Flags:",id:"flags-2",level:4},{value:"Example:",id:"example-2",level:4}];function t(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cli",children:"CLI"}),"\n",(0,s.jsx)(n.p,{children:"The DataLoaf CLI is a command-line interface tool designed to simplify the deployment and management of DataLoaf infrastructure on AWS."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"To install DataLoaf CLI, you can download the binary from the official repository. After this is done"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd CLI/cmd\nmake dataloaf-cli\n"})}),"\n",(0,s.jsx)(n.h4,{id:"usage",children:"Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf [command]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"available-commands",children:"Available Commands:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"completion"}),": Generate the autocompletion script for the specified shell."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deploy"}),": Deploy DataLoaf infrastructure to AWS."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"help"}),": Help about any command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"remove"}),": Remove all DataLoaf infrastructure."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"flags",children:"Flags:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h, --help"}),": Display help information about the loaf command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-t, --toggle"}),": Help message for toggle."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf deploy\n"})}),"\n",(0,s.jsx)(n.p,{children:'Use "loaf [command] --help" for more information about a command.'}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"deploy-dataloaf-infrastructure-to-aws",children:"Deploy DataLoaf Infrastructure to AWS"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"deploy"})," command automates the provisioning of of AWS infrastructure to an AWS account"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Must provide valid credentials to the account"})}),"\n",(0,s.jsx)(n.h4,{id:"usage-1",children:"Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf deploy [flags]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"flags-1",children:"Flags:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-a, --access string"}),": Your AWS Access Key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-d, --domain string"}),": Domain for the DataLoaf application."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only required for HTTPS connections. If not provided, falls back to HTTP"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-h, --help"}),": Display help information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-r, --region string"}),": Your AWS region."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-s, --secret string"}),": Your AWS Secret Key."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf deploy -a <your_access_key> -s <your_secret_key> -r <aws_region> -d <your_domain>\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"remove-all-currently-provisioned-infrastructure",children:"Remove All Currently Provisioned Infrastructure"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"remove"})," command efficiently removes all currently provisioned DataLoaf infrastructure from your AWS account, reducing unnecessary costs when infrastructure is no longer needed."]}),"\n",(0,s.jsx)(n.h4,{id:"usage-2",children:"Usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf remove [flags]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"flags-2",children:"Flags:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-a, --access string"}),": Your AWS Access Key."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-d, --domain string"}),": Domain associated with the DataLoaf application."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-h, --help"}),": Display help information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-r, --region string"}),": Your AWS region."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-s, --secret string"}),": Your AWS Secret Key."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"loaf remove -a <your_access_key> -s <your_secret_key> -r <aws_region> -d <your_domain>\n"})}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>o});var s=l(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);