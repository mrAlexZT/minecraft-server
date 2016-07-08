<a href="../../../itzg-minecraft-server" alt="itzg Minecraft server" ><img src="images/Minecraft.png" width="250" alt="itzg Minecraft server" /></a>
## itzg Minecraft server

The JPS package deploys itzg Minecraft server that initially contains 1 application server.

### Highlights
This package is designed to deploy docker image provides a Minecraft Server that will automatically download the latest stable version at startup. You can also run/upgrade to any specific version or the latest snapshot.

To simply use the latest stable version, run
##### docker run -d -p 25565:25565 --name mc itzg/minecraft-server
##### where the standard server port, 25565, will be exposed on your host machine.

If you want to serve up multiple Minecraft servers or just use an alternate port,
change the host-side port mapping such as
##### docker run -p 25566:25565 ...

will serve your Minecraft server on your host's port 25566 since the -p syntax is
host-port:container-port.
Speaking of multiple servers, it's handy to give your containers explicit names using --name, such as

##### docker run -d -p 25565:25565 --name mc itzg/minecraft-server

With that you can easily view the logs, stop, or re-start the container:

##### docker logs -f mc
#####   ( Ctrl-C to exit logs action )
##### docker stop mc
##### docker start mc


### Environment Topology

![Docker Birthday Tutorial Voting App Topology](https://docs.google.com/drawings/d/12zfJ4rPRBFMcZ_pwF86N6a7YGwTL4uImNdwf3MJwOcs/pub?w=276&h=216)

### Specifics

Layer                |     Image          | Number of CTs <br/> by default | Cloudlets per CT <br/> (reserved/dynamic) | Options
-------------------- | :---------------- | :----------------------------: | :---------------------------------------: | :-----:
AS                   | itzg/minecraft-server:latest |       1                        |           1 / 16                          | 

* AS - Application server 
* CT - Container

### Deployment

In order to get this solution instantly deployed, click the "Get It Hosted Now" button, specify your email address within the widget, choose one of the [Jelastic Public Cloud providers](https://jelastic.cloud) and press Install.

[![GET IT HOSTED](https://raw.githubusercontent.com/jelastic-jps/jpswiki/master/images/getithosted.png)](https://jelastic.com/install-application/?manifest=https%3A%2F%2Fgithub.com%2Fjelastic-jps%2Fitzg-minecraft-server%2Fraw%2Fmaster%2Fmanifest.jps)

To deploy this package to Jelastic Private Cloud, import [this JPS manifest](../../raw/master/manifest.jps) within your dashboard ([detailed instruction](https://docs.jelastic.com/environment-export-import#import)).

More information about Jelastic JPS package and about installation widget for your website can be found in the [Jelastic JPS Application Package](https://github.com/jelastic-jps/jpswiki/wiki/Jelastic-JPS-Application-Package) reference.