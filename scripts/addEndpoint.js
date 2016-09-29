//@auth
//@req(nodeId, port)

import com.hivext.api.development.Scripting;

var envName = '${env.envName}';

var resp = jelastic.env.control.AddEndpoint(envName, session, nodeId, port, "TCP", "Minecraft Server");
print(resp)
if (!resp.result) return resp;
return resp;

var scripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/",
    session : session
}));

return scripting.eval({
    script : "InstallApp",
    targetAppid : envName,
    manifest : {
        "jpsType" : "update",
        "application" : {
			"id": "minecraft-server",
			"name": "Minecraft Live Migration",
			"success": {
				"email": "Your Minecraft server has been successfully deployed. Please use the following address of the server to connect your Minecraft client: ${env.domain}:" + resp.object.publicPort
			}
		}
    }
});
