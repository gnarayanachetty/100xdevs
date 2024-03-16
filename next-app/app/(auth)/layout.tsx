import React from "react";

export default function SigninLayout({children}:{
	children: React.ReactNode
}) {
	return <div>
		<div className="border-b p-1 text-center">
			20% off for the next few days
			{children}
		</div>
	</div>
}