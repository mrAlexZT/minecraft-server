//@auth
//@req(nodeId, port)

import com.hivext.api.development.Scripting;

var envName = '${env.envName}';

var resp = jelastic.env.control.AddEndpoint(envName, session, nodeId, port, "TCP", "Minecraft Server");
if (!resp.result) return resp;

var scripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/",
    session : session
}));

resp = scripting.eval({
    script : "InstallApp",
    targetAppid : envName,
    manifest : {
        "jpsType" : "update",
        "application" : {
		"id": "sendEmail",
		"name": "Minecraft Server Address",
		"success": {
		        "email": "Your Minecraft server has been successfully deployed. </br> Please use the following server address to connect your Minecraft client: <a href='tcp://${env.domain}:" + resp.object.publicPort + "'>${env.domain}:" + resp.object.publicPort + "</a>."
		}
	}
    }
});

print("respnose:" + resp)

return {result:-1, reponse: resp};
