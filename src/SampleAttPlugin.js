import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";

import CustomTaskList from "./components/CustomTaskList/CustomTaskList";

const PLUGIN_NAME = "SampleAttPlugin";

export default class SampleAttPlugin extends FlexPlugin {
	constructor() {
		super(PLUGIN_NAME);
	}

	/**
	 * This code is run when your plugin is being started
	 * Use this to modify any UI components or attach to the actions framework
	 *
	 * @param flex { typeof import('@twilio/flex-ui') }
	 */
	async init(flex, manager) {
		// const options = { sortOrder: -1 };
		// flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="SampleAttPlugin-component" />, options);

		manager.strings.TaskInfoPanelContent = `
    <h1>MVNO</h1>
    <h2>Name</h2>
    <p>{{task.attributes.mvno_name}}</p>
    <hr />
    <h1>CALLER CONTEXT</h1>
    <h2>Name</h2>
    <p>{{task.attributes.caller.name}}</p>
    <h2>Phone</h2>
    <p>{{task.attributes.caller.phone}}</p>
    <hr />
    <h1>CUSTOMER CONTEXT</h1>
    <h2>Customer phone number</h2>
    <p>{{task.attributes.customer.phone}}</p>
    <hr />
    <h1>IVR CONTEXT</h1>
    <h2>Intent</h2>
    <p>{{task.attributes.intent}}</p>
    <h2>Error</h2>
    <p>{{task.attributes.error}}</p>
    `;

		flex.AgentDesktopView.defaultProps.showPanel2 = false;

		flex.MainHeader.defaultProps.logoUrl =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png";
	}
}
