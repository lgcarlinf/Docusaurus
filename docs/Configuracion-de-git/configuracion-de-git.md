# Configuracion de git

:::warning
Guia basada en sistemas UNIX, para windows usar los commandos análogos o
el explorador de archivos de su preferencia
:::

:::warning
 No es una guía lineal, no solo ejecute los comandos, revise minuciosamente
las indicaciones y si el caso que lo corresponde
:::

## Antes de empezar

Lo que se realizara en esta guía sera:

1. Crear multiples llaves ssh: en caso necesite en un mismo dispositivo
tener acceso ssh (paswordless) a diferentes cuentas de github, se necesita
crear diferentes llaves shh o en caso necesite separar sus accesos ssh para diferentes
respositorios git

2. Crear carpetas con archivos de configuración de git para que
puedan usar las diferentes laves ssh según se necesite

3. Colocar las instrucciones en el archivo de configuración de git a nivel
de usuario para que escoja correctamente cual llave shh usar para operaciones
como push de ramas y clonación de repositorios.

## Creación de llaves shh

Por lo general, guardamos nuestras llaves shh en la carpeta .shh en nuestra
carpeta de usuario

```bash
cd ~/.ssh
```

Podemos generar nuestra pareja de llaves ssh con el comando

```bash
ssh-keygen -t rsa -f ./id_rsa_alternative
```

o solo con


```bash
ssh-keygen -f ./id_rsa_alternative
```

O con cualquier otro algoritmo de su preferecia/necesidad

El parametro -t permte escoger el agoritmo, por o gnral usamos rsa ya q es el mas
aceptado en diferentes repositorios de git como por ejemplo el de azure

:::warning
No se limite solo a esta guia, si necesita mas opciones para
configurar, puede usar, en sistemas UNIX
:::

```bash
man ssh-keygen
```

o, universalmente

```bash
ssh-keygen --help
```

Puede repetir estos pasos la cantidad de veces que sea necesaria acorde 
a la cantidad de llaves que necesite, solo que con diferente nombre en el parametro
-f

Ejemplo

```bash
ssh-keygen -f ./id_rsa_personal
```
:::note
El valor ./ en el parametro -f funcionara siempre que estemos ubicados
la carpeta .ssh EN NUESTRO EMULADOR DE TERMIMAL, si solo estamos ubicados en el 
explorador de archivos no funcionaria
:::

## Distribucion de configuraciones
Como ejemplo creare dos carpetas

```bash
mkdir alternative personal

```
Navegamos a la carpeta alternative

```bash
cd alternative

```
Creamos un archivo llamado .gitconfig.alternative.

Por ejemplo para sistemas basados en UNIX y usar vscde

```bash
code .gitconfig.alternative
```

O usar editor de su preferencia


Luego podemos insertar algo como

```bash
[user]
email = developer@provedor.com # el correo de su cuenta de github
name = Developer # nombre del desarrollador, no usar alias

[github]
user = "developer_asfg" # usuario de su ceunta de github

[core]
sshCommand = "ssh -i ~/.ssh/id_rsa_alternative"
```

Como veran aca se hace referencia a la llave rsa q se creo exclusivamente
para alternative


Guardamos, y ahora nos movemos a a carpeta personal

```bash
cd ../personal
```

Creamos el archivo .gitconfig.personal

```code 
code .gitconfig.personal
```


Colocamos algo como

```bash
[user]
email = lgcarlinf@personal.com # el correo de mi cuenta personal de github
name = lgcarlinf # Mi nombre con el q firmo mis commits como develope open source
 
[github]
user = "lgcarlinf" mi usuario personal de github 

[core]
sshCommand = "ssh -i ~/.ssh/id_rsa_personal"

```

Como se puede apreciar, aca dirijo a la llave ssh personal


Finalmente me dirijo a mi carpeta de Usuario

```bash

cd ~

```

Ahora en esta carpeta edito el archivo .gitconfig añanadiendo lo siguiente

```bash
code .gitconfig

```

```bash
# Configuracion preva a nivel de usuario, este es un ejemplo no
es necesario copiar
[init]
defaultBranch = main
 

# Enrutamiento de a configuracion a escoger dependiendo de la carpeta

[includeIf "gitdir:~/personal/"] # inluye todos los .git projects en personnal/ 
path = ~/personal/.gitconfig.personal

[includeIf "gitdir:~/alternative/"]
path = ~/alternative/.gitconfig.alternative
 

# Se puede crear aun mas enrutamientos a mas carpetas con config diferente
[includeIf "gitdir:~/teletubie/"]
path = ~/brive/.gitconfig.teletubi

[core]
excludesfile = ~/.gitignore  # valid everywhere

```

Como se puede apreciar hemos enrutado el uso de las llave sh dependiendo de la
carpeta dode estemos

A partir de ahora si quiero clonar repos debo hacerlo
desde mi carpeta alternative

Si desea cambiar la configuración de alternative debo modificar el archivo .gitconfig.alternative y 
no afectare la configuración de mis otras carpetas.

## Subir la llave publica a Github

Recordemos que los contenidos de la llave privada no deben ser divulgados, solo la llave publica

Las llaves publicas tienen la terminación .pub y ya se crearon anteriormente junto con su pareja privada

Por ejemplo para acceder a los contenidos de la llave publica alternative

```bash
cat ~/.ssh/id_rsa_alternative.pub
```

y este contenido se debe copiar y pegar en github en el apartado respectivo.

Para esto se debe ir a settings (configuración) en el menu de usuario y luego seleccionar en el menu lateral
izquierdo la opción de SSH.

**No olvidar activar los permisos a las organizaciones respectivas en la opción de SSO**


## Clonar repositorios

Para clonar los repositorios no se debe usar el protocolo https, sino el ssh y adentro de la carpeta `alternative` o 
su equivalente.

Al momento hacer click en el botón `Code`, escoger la opción `SSH` y no HTTPS

Asegurarse que el formato no contenga una URI https, sino ssh o el formato ssh de git

```bash
git clone git@github.com:Wiki-alternative/knowledge-center.git
```

**No olvidar estar adentro de la carpeta alternative o su equivalente**

