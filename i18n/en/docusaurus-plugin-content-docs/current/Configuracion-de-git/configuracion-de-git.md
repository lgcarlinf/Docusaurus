# Git configuration

:::warning
Guide based on UNIX systems, for Windows use the analogous commands or
the file explorer of your choice
:::

:::warning
It is not a linear guide, do not just execute the commands, review thoroughly
the indications and if the corresponding case
:::

## Before starting

What will be done in this guide will be:

1. Create multiple ssh keys: in case you need them on the same device
have ssh (passwordless) access to different github accounts, you need
create different shh keys or in case you need to separate your ssh accesses for different
git repositories

2. Create folders with git configuration files so that
You can use the different SSH keys as needed

3. Place the instructions in the git configuration file at the level
to correctly choose which shh key to use for operations
such as branch pushing and repository cloning.

## Creating shh keys

We usually save our shh keys in the .shh folder on our
user folder

```bash
cd ~/.ssh
```

We can generate our ssh key pair with the command

```bash
ssh-keygen -t rsa -f ./id_rsa_alternative
```


or only with


```bash
ssh-keygen -f ./id_rsa_alternative
```

Or with any other algorithm of your preference/need

The -t parameter allows you to choose the algorithm, generally we use rsa since it is the most
accepted in different git repositories such as Azure

:::warning
Don't limit yourself to just this guide, if you need more options to
configure, can use, on UNIX systems
:::

```bash
man ssh-keygen
```

o, universalmente

```bash
ssh-keygen --help
```

You can repeat these steps as many times as necessary. 
to the number of keys you need, just with a different name in the parameter
-f

Ejemplo

```bash
ssh-keygen -f ./id_rsa_personal
```
:::note
The value ./ in the -f parameter will work as long as we are located
the .ssh folder IN OUR TERMIMAL EMULATOR, if we are only located in the 
file explorer would not work
:::

## Configuration distribution

As an example I will create two folders

```bash
mkdir alternative personal

```
We navigate to the alternative folder

```bash
cd alternative

```

We create a file called .gitconfig.alternative.

For example for UNIX based systems and use vscde

```bash
code .gitconfig.alternative
```

Or use editor of your choice


Then we can insert something like

```bash
[user]
email = developer@provedor.com # your github account email
name = Developer # developer name

[github]
user = "developer_asfg" # user of your github account

[core]
sshCommand = "ssh -i ~/.ssh/id_rsa_alternative"
```


As you will see, reference is made here to the RSA key that was created exclusively
for alternative


We save, and now we move to the personal folder

```bash
cd ../personal
```

We create the .gitconfig.personal file

```code 
code .gitconfig.personal
```


We put something like

```bash
[user]
email = lgcarlinf@personal.com # the email of my personal github account
name = lgcarlinf # My name with which I sign my commits as develope open source
 
[github]
user = "lgcarlinf" mi usuario personal de github 

[core]
sshCommand = "ssh -i ~/.ssh/id_rsa_personal"

```

As you can see, here I go to the personal ssh key


Finally I go to my User folder

```bash

cd ~

```

Now in this folder I edit the .gitconfig file adding the following

```bash
code .gitconfig

```

```bash
# Pre-configured at user level, this is an example, no need to copy
[init]
defaultBranch = main
 

# Routing configuration to choose depending on the folder

[includeIf "gitdir:~/personal/"] # includes all .git projects in personal/
path = ~/personal/.gitconfig.personal

[includeIf "gitdir:~/alternative/"]
path = ~/alternative/.gitconfig.alternative
 

# You can create even more routes to more folders with different config
[includeIf "gitdir:~/teletubie/"]
path = ~/brive/.gitconfig.teletubi

[core]
excludesfile = ~/.gitignore  # valid everywhere

```

As you can see we have routed the use of the sh keys depending on the
folder where we are

From now on if I want to clone repos I must do it
from my alternative folder

If you want to change the configuration of alternative I must modify the .gitconfig.alternative file and 
I won't affect the settings of my other folders.


## Upload the public key to Github

Let us remember that the contents of the private key should not be disclosed, only the public key

Public keys have the ending .pub and were previously created together with their private partner

For example to access the contents of the alternative public key

```bash
cat ~/.ssh/id_rsa_alternative.pub
```

and this content must be copied and pasted into github in the respective section.

To do this you must go to settings in the user menu and then select in the side menu
left the SSH option.

**Don't forget to activate permissions to the respective organizations in the SSO option**


## Clone repositories

To clone the repositories you should not use the https protocol, but ssh and inside the `alternative` folder or 
its equivalent.

At the moment click on the `Code` button, choose the `SSH` option and not HTTPS

Make sure the format does not contain an https URI, but rather ssh or the git ssh format

```bash
git clone git@github.com:Wiki-alternative/knowledge-center.git
```

**Don't forget to be inside the alternative folder or its equivalent**

