let opChoosen;
let choosenCode = "";
let finalCode = document.getElementById("finalCode");
let copyCode = document.getElementById("copyCode");

document.getElementById("optionsList").addEventListener("mouseover", showImg);
document.getElementById("optionsList2").addEventListener("mouseover", showImg);
document.getElementById("optionsList3").addEventListener("mouseover", showImg);

document.getElementById("optionsList").addEventListener("click", generateCode);
document.getElementById("optionsList2").addEventListener("click", generateCode);
document.getElementById("optionsList3").addEventListener("click", generateCode);

document
	.getElementById("optionsList")
	.addEventListener("mouseout", showDefault);
document
	.getElementById("optionsList2")
	.addEventListener("mouseout", showDefault);
document
	.getElementById("optionsList3")
	.addEventListener("mouseout", showDefault);

//Show image on mouseover...
function showImg(e) {
	e.preventDefault();
	optionHovered = e.target.id;

	switch (optionHovered) {
		case "op1":
			document.getElementById("imgExample").setAttribute("src", "img/op1.png");
			break;
		case "op2":
			document.getElementById("imgExample").setAttribute("src", "img/op2.png");
			break;
		case "op3":
			document.getElementById("imgExample").setAttribute("src", "img/op3.png");
			break;
		case "op4":
			document.getElementById("imgExample").setAttribute("src", "img/op4.png");
			break;
		case "op5":
			document.getElementById("imgExample").setAttribute("src", "img/op5.png");
			break;

		case "op6":
			document.getElementById("imgExample").setAttribute("src", "img/op6.png");
			break;
		case "op7":
			document.getElementById("imgExample").setAttribute("src", "img/op7.png");
			break;
		case "op8":
			document.getElementById("imgExample").setAttribute("src", "img/op8.png");
			break;
		case "op9":
			document.getElementById("imgExample").setAttribute("src", "img/op9.png");
			break;
		case "op10":
			document.getElementById("imgExample").setAttribute("src", "img/op10.png");
			break;

		case "op11":
			document.getElementById("imgExample").setAttribute("src", "img/op11.png");
			break;
		case "op12":
			document.getElementById("imgExample").setAttribute("src", "img/op12.png");
			break;
		case "op13":
			document.getElementById("imgExample").setAttribute("src", "img/op13.png");
			break;
		case "op14":
			document.getElementById("imgExample").setAttribute("src", "img/op14.png");
			break;
		case "op15":
			document.getElementById("imgExample").setAttribute("src", "img/op15.png");
			break;

		case "op16":
			document.getElementById("imgExample").setAttribute("src", "img/op16.png");
			break;

		default:
			break;
	}
}
//Show image default on mouseout...
function showDefault() {
	document
		.getElementById("imgExample")
		.setAttribute(
			"src",
			"http://via.placeholder.com/600x200?text=PREVIEW+here..."
		);
}

function generateCode(e) {
	e.preventDefault();
	optionClicked = e.target;

	switch (optionClicked.id) {
		case "op1":
			addedText(optionClicked);
			opChoosen = `
						<!-- START HEADER -->
						<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="header">
							<tr>
								<td width="100%" valign="top" align="center">

									<!-- Start Wrapper  -->
									<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
										<tr>
											<td align="center">

												<!-- Start Container  -->
												<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
													<tr>
														<td height="20" style="font-size:10px; line-height:10px;"> </td>
														<!-- Spacer -->
													</tr>
													<tr>
														<td width="320" class="mobile" style="padding-left:15px;">
															<img src="http://via.placeholder.com/200x50" width="200" height="50" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />
														</td>
														<td height="10" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
														<td width="235" class="mobile" style="font-family:arial; font-size:12px; line-height:18px; padding-left:15px;" align="center">

															<table width="200" class="container" cellpadding="0" cellspacing="0" border="0" align="center">
																<tr>
																	<td align="center">
															<img src="http://via.placeholder.com/200x50" width="200" height="50" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />

																	</td>
																</tr>
															</table>

														</td>
													</tr>
													<tr>
														<td height="20" style="font-size:10px; line-height:10px;"> </td>
														<!-- Spacer -->
													</tr>
												</table>
												<!-- Start Container  -->

											</td>
										</tr>
									</table>
									<!-- End Wrapper  -->

								</td>
							</tr>
						</table>
						<!-- END HEADER --> `;
			break;
		case "op2":
			addedText(optionClicked);
			opChoosen = `
			<!-- START MENU -->
			<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="menu">
				<tr>
					<td width="100%" valign="top" align="center">

						<!-- Start Wrapper -->
						<table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#545150" class="wrapper">
							<tr>
								<td align="center">

									<!-- Start Container -->
									<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
										<tr>
											<td height="15" style="font-size:10px; line-height:10px;"> </td>
											<!-- Spacer -->
										</tr>
										<tr>
											<td width="180" class="mobile50" style="font-family:arial; font-size:12px; line-height:18px; color:#FFFFFF;" align="center" valign="middle" st-content="menu">
												<a href="" target="_blank" alias="" style="font-size:12px; line-height:18px; color:#FFFFFF; text-decoration:none;">Link One</a>
											</td>
											<td width="10" style="color:#666666;" align="center" st-content="menu">|</td>
											<td width="190" class="mobile50" style="font-family:arial; font-size:12px; line-height:18px; color:#FFFFFF;" align="center" valign="middle" st-content="menu">
												<a href="" target="_blank" alias="" style="font-size:12px; line-height:18px; color:#FFFFFF; text-decoration:none;">Link Two</a>
											</td>
											<td width="10" style="color:#666666;" align="center" class="mobileOff" st-content="menu">|</td>
											<td width="190" class="mobileOff" style="font-family:arial; font-size:12px; line-height:18px; color:#FFFFFF;" align="center" valign="middle" st-content="menu">
												<a href="" target="_blank" alias="" style="font-size:12px; line-height:18px; color:#FFFFFF; text-decoration:none;">Link Three</a>
											</td>
										</tr>
										<tr>
											<td height="15" style="font-size:10px; line-height:10px;"> </td>
											<!-- Spacer -->
										</tr>
									</table>
									<!-- Start Container -->

								</td>
							</tr>
						</table>
						<!-- End Wrapper -->

					</td>
				</tr>
			</table>
			<!-- END MENU --> `;
			break;
		case "op3":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START BANNER -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="banner">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper  -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container  -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper">
											<tr>
												<td width="600" class="wrapper">
													<img src="http://via.placeholder.com/600x200" width="600" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="banner-image" />
												</td>
											</tr>
										</table>
										<!-- Start Container  -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper  -->

						</td>
					</tr>
				</table>
				<!-- END BANNER --> `;
			break;
		case "op4":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START TITLE + TEXT -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="title+text">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
								<tbody>
									<tr>
										<td align="center" bgcolor="#ffffff">

											<!-- Start Container -->
											<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="title+text">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit.
													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px; padding:0 20px;" st-content="title+text">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis. Duis bibendum sem pharetra quam ullamcorper malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" class="center">

														<!-- Start Button -->
														<table width="190" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="title+text">
															<tr>
																<td width="190" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="text+title">
																	<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																</td>
															</tr>
														</table>
														<!-- End Button -->

													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
											</table>
											<!-- End Container -->

										</td>
									</tr>
								</tbody>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END TITLE + TEXT --> `;
			break;
		case "op5":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START LEFT-IMAGE -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="left-image">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="300" class="mobile" align="center" valign="top">

													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="280" class="mobile" style="font-size:12px; line-height:18px;">
																<img src="http://placehold.it/280x210" width="280" height="210" style="margin:0; padding:0; border:none; display:block;" alt="" class="imgClass" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td width="300" class="mobile" align="center" valign="top">

													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="280" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" align="center" st-title="left-image">
																Lorem ipsum dolor sit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="280" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" align="center" st-content="left-image">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta purus porttitor enim scelerisque, vel malesuada lorem mattis. Curabitur ac orci libero. Vel malesuada lorem mattis. Curabitur.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="280" class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="170" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="left-image">
																	<tr>
																		<td width="170" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="left-image">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END LEFT-IMAGE --> `;
			break;

		case "op6":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START RIGHT-IMAGE -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="right-image">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="320" class="mobile" align="center" valign="top">


													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" align="center" st-title="right-image">
																Lorem ipsum dolor sit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" align="center" st-content="right-image">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta purus porttitor enim scelerisque, vel malesuada lorem mattis. Curabitur ac orci libero. Vel malesuada lorem mattis. Curabitur.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="170" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="right-image">
																	<tr>
																		<td width="170" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="right-image">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
												<td width="300" class="mobile" align="center" valign="top">

													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="left">
														<tr>
															<td width="280" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://placehold.it/280x210" width="280" height="210" style="margin:0; padding:0; border:none; display:block;" alt="" class="imgClass" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END RIGHT-IMAGE --> `;
			break;
		case "op7":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 1 IMAGE + TEXT COLUMN -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="1-image+text-column">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
								<tbody>
									<tr>
										<td align="center" bgcolor="#ffffff">

											<!-- Start Container -->
											<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" class="mobile">
														<img src="http://placehold.it/600x200" width="600" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="1-image+text-column">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit.
													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px; padding:0 20px;" st-content="1-image+text-column">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis. Duis bibendum sem pharetra quam ullamcorper malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="center" class="center">

														<!-- Start Button -->
														<table width="190" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="1-image+text-column">
															<tr>
																<td width="190" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="1-image+text-column">
																	<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																</td>
															</tr>
														</table>
														<!-- End Button -->

													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
											</table>
											<!-- End Container -->

										</td>
									</tr>
								</tbody>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 1 IMAGE + TEXT COLUMN --> `;
			break;
		case "op8":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 2 IMAGE + TEXT COLUMNS -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="2-images+text-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="300" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="280" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/280x200" width="280" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="2-images+text-columns">
																Title One
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" st-content="2-images+text-columns">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="190" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="2-images+text-columns">
																	<tr>
																		<td width="190" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="2-images+text-columns">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td width="300" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="280" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="280" class="mobile" style="font-size:12px; line-height:18px;">
																<img src="http://www.placehold.it/280x200" width="280" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="2-images+text-columns">
																Title Two
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td align="center" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" st-content="2-images+text-columns">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="190" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="2-images+text-columns">
																	<tr>
																		<td width="190" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="2-images+text-columns">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 2 IMAGE + TEXT COLUMNS --> `;
			break;
		case "op9":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 3 IMAGE + TEXT COLUMN -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="3-images+text-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="190" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="190" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/180x100" width="180" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="3-images+text-columns">
																Title One
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" st-content="3-images+text-columns">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="180" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="3-images+text-columns">
																	<tr>
																		<td width="180" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="3-images+text-columns">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="190" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="190" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/180x100" width="180" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="3-images+text-columns">
																Title Two
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" st-content="3-images+text-columns">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="190" class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="180" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="3-images+text-columns">
																	<tr>
																		<td width="180" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="3-images+text-columns">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="190" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="190" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/180x100" width="180" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:20px; line-height:26px; font-weight:bold;" st-title="3-images+text-columns">
																Title Three
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" align="center" class="mobile" style="font-family:arial, sans-serif; font-size:14px; line-height:20px;" st-content="3-images+text-columns">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit.
															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
														<tr>
															<td width="180" class="mobile" style="font-size:14px; line-height:20px;" align="center">

																<!-- Start Button -->
																<table width="180" cellpadding="0" cellspacing="0" align="center" border="0" bgcolor="#000000" st-button="3-images+text-columns">
																	<tr>
																		<td width="180" height="36" align="center" valign="middle" style="font-family:arial, sans-serif; font-size: 16px; color: #ffffff; line-height:18px; border-radius:3px;" st-content="3-images+text-columns">
																			<a href="" target="_blank" alias="" style="font-family:arial, sans-serif; text-decoration: none; color: #ffffff;">My Button ></a>
																		</td>
																	</tr>
																</table>
																<!-- End Button -->

															</td>
														</tr>
														<tr>
															<td height="20" style="font-size:10px; line-height:10px;"> </td>
															<!-- Spacer -->
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 3 IMAGE + TEXT COLUMN --> `;
			break;
		case "op10":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START FULL-TEXT -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="full-text">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
								<tbody>
									<tr>
										<td align="center" bgcolor="#ffffff">

											<!-- Start Container -->
											<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
												<tr>
													<td height="20" style="font-size:20px; line-height:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px; padding:0 15px;" st-content="full-text">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis. Duis bibendum sem pharetra quam ullamcorper malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
													</td>
												</tr>
												<tr>
													<td height="20" style="font-size:20px; line-height:20px;"> </td>
													<!-- Spacer -->
												</tr>
											</table>
											<!-- End Container -->

										</td>
									</tr>
								</tbody>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END FULL-TEXT --> `;
			break;

		case "op11":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 2-TEXT-COLUMNS -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="2-text-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
								<tbody>
									<tr>
										<td align="center" bgcolor="#ffffff">

											<!-- Start Container -->
											<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td width="300" align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" class="mobile">

														<table width="270" align="center">
															<tr>
																<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" st-content="2-text-columns">
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis. Duis bibendum sem pharetra quam ullamcorper malesuada.
																</td>
															</tr>
														</table>

													</td>
													<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
													<td width="300" align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" class="mobile">

														<table width="270" align="center">
															<tr>
																<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" st-content="2-text-columns">
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis. Duis bibendum sem pharetra quam ullamcorper malesuada.
																</td>
															</tr>
														</table>

													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
											</table>
											<!-- End Container -->

										</td>
									</tr>
								</tbody>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 2 TEXT COLUMN --> `;
			break;
		case "op12":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 3-TEXT-COLUMNS -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="3-text-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="wrapper" bgcolor="#ffffff">
								<tbody>
									<tr>
										<td align="center" bgcolor="#ffffff">

											<!-- Start Container -->
											<table width="600" cellpadding="0" cellspacing="0" align="center" border="0" class="container">
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
												<tr>
													<td width="200" align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" class="mobile">

														<table width="170" class="mobile280" align="center">
															<tr>
																<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" st-content="3-text-columns">
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis.
																</td>
															</tr>
														</table>

													</td>
													<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
													<td width="200" align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" class="mobile">

														<table width="170" class="mobile280" align="center">
															<tr>
																<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" st-content="3-text-columns">
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis.
																</td>
															</tr>
														</table>

													</td>
													<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
													<td width="200" align="center" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" class="mobile">

														<table width="170" class="mobile280" align="center">
															<tr>
																<td align="left" style="font-family:Verdana, Arial, sans serif; font-size: 14px; color: #4d4d4d; line-height:18px;" st-content="3-text-columns">
																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, efficitur sit amet luctus eget, malesuada eu turpis.
																</td>
															</tr>
														</table>

													</td>
												</tr>
												<tr>
													<td height="20" style="line-height:20px; font-size:20px;"> </td>
													<!-- Spacer -->
												</tr>
											</table>
											<!-- End Container -->

										</td>
									</tr>
								</tbody>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 3 TEXT COLUMN --> `;
			break;
		case "op13":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 2 IMAGES COLUMNS -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="2-images-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="300" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="270" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td class="mobile" style="font-size:12px; line-height:18px;" align="left">
																<img src="http://www.placehold.it/270x200" width="270" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
												<td width="300" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="270" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="270" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/270x200" width="270" height="200" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:20px; line-height:20px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 2 IMAGES COLUMNS --> `;
			break;
		case "op14":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START 3 IMAGES COLUMNS -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="3-images-columns">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="FFFFFF">
								<tr>
									<td height="20" style="font-size:20px; line-height:20px;"> </td>
									<!-- Spacer -->
								</tr>
								<tr>
									<td align="center">

										<!-- Start Container -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="190" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="170" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/170x100" width="170" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="170" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="170" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/170x100" width="170" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
												<td height="20" style="font-size:10px; line-height:10px;" class="mobileOn"></td>
												<td width="200" class="mobile" style="font-size:12px; line-height:18px;" align="center">

													<!-- Start Content -->
													<table width="170" cellpadding="0" cellspacing="0" border="0" class="container" align="center">
														<tr>
															<td width="170" class="mobile" style="font-size:12px; line-height:18px;" align="center">
																<img src="http://www.placehold.it/170x100" width="170" height="100" style="margin:0; padding:0; border:none; display:block;" border="0" class="imgClass" alt="" st-image="image" />
															</td>
														</tr>
													</table>
													<!-- End Content -->

												</td>
											</tr>
										</table>
										<!-- End Container -->

									</td>
								</tr>
								<tr>
									<td height="20" style="font-size:20px; line-height:20px;"> </td>
									<!-- Spacer -->
								</tr>
							</table>
							<!-- End Wrapper -->

						</td>
					</tr>
				</table>
				<!-- END 3 IMAGES COLUMNS --> `;
			break;
		case "op15":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START SOCIAL MEDIA 4 IMAGES -->
				<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" st-sortable="social">
					<tr>
						<td width="100%" valign="top" align="center">

							<!-- Start Wrapper  -->
							<table width="600" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
								<tr>
									<td align="center">

										<!-- Start Container  -->
										<table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
											<tr>
												<td width="150" class="mobile" style="font-family:arial; font-size:12px; line-height:18px;" align="center">
													<img src="http://www.placehold.it/48x48" width="48" height="48" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />
												</td>
												<td width="150" class="mobile" style="font-family:arial; font-size:12px; line-height:18px;" align="center">
													<img src="http://www.placehold.it/48x48" width="48" height="48" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />
												</td>
												<td width="150" class="mobile" style="font-family:arial; font-size:12px; line-height:18px;" align="center">
													<img src="http://www.placehold.it/48x48" width="48" height="48" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />
												</td>
												<td width="150" class="mobile" style="font-family:arial; font-size:12px; line-height:18px;" align="center">
													<img src="http://www.placehold.it/48x48" width="48" height="48" style="margin:0; padding:0; border:none; display:block;" border="0" class="centerClass" alt="" st-image="image" />
												</td>
											</tr>
											<tr>
												<td height="20" style="font-size:10px; line-height:10px;"> </td>
												<!-- Spacer -->
											</tr>
										</table>
										<!-- Start Container  -->

									</td>
								</tr>
							</table>
							<!-- End Wrapper  -->

						</td>
					</tr>
				</table>
				<!-- END SOCIAL MEDIA 4 IMAGES --> `;
			break;

		case "op16":
			addedText(optionClicked);
			opChoosen = `
			    <!-- START SEPARATOR -->
				<table width="100%" st-sortable="separator">
					<tr>
						<td>
							<table width="600" class="container">
								<tr>
									<td height="20" style="font-size:10px; line-height:10px;"></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
    			<!-- END SEPARATOR --> `;
			break;
		default:
			break;
	}

	choosenCode += opChoosen;
	finalCode = `
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<html>

	<head>

		<title>Newsletter Generated By Diego Franchina based in Stamplia Template.</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<!--[if !mso]>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<![endif]-->

		<style type="text/css">
			.ReadMsgBody {
				width: 100%;
				background-color: #F6F6F6;
			}
			
			.ExternalClass {
				width: 100%;
				background-color: #F6F6F6;
			}
			
			body {
				width: 100%;
				background-color: #f6f6f6;
				margin: 0;
				padding: 0;
				-webkit-font-smoothing: antialiased;
				font-family: Arial, Times, serif
			}
			
			table {
				border-collapse: collapse !important;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
			}
			
			@-ms-viewport {
				width: device-width;
			}
			
			@media only screen and (max-width: 639px) {
				.wrapper {
					width: 100%;
					padding: 0 !important;
				}
			}
			
			@media only screen and (max-width: 480px) {
				.centerClass {
					margin: 0 auto !important;
				}
				.imgClass {
					width: 100% !important;
					height: auto;
				}
				.wrapper {
					width: 320px;
					padding: 0 !important;
				}
				.header {
					width: 320px;
					padding: 0 !important;
				}
				.container {
					width: 300px;
					padding: 0 !important;
				}
				.mobile {
					width: 300px;
					display: block;
					padding: 0 !important;
					text-align: center !important;
				}
				.mobile280 {
					width: 280px;
					display: block;
					padding: 0 !important;
					text-align: center !important;
				}
				.mobile50 {
					width: 300px;
					padding: 0 !important;
					text-align: center;
				}
				*[class="mobileOff"] {
					width: 0px !important;
					display: none !important;
				}
				*[class*="mobileOn"] {
					display: block !important;
					max-height: none !important;
				}
			}

		</style>
		<!--[if gte mso 15]>
		<style type="text/css">
			table { font-size:1px; line-height:0; mso-margin-top-alt:1px;mso-line-height-rule: exactly; }
			* { mso-line-height-rule: exactly; }
		</style>
		<![endif]-->
	</head>
	<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" style="background-color:#F6F6F6;  font-family:Arial,serif; margin:0; padding:0; min-width: 100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">

		<!--[if !mso]> -->
		<img style="min-width:600px; display:block; margin:0; padding:0" class="mobileOff" width="600" height="1" src="http://s14.postimg.org/7139vfhzx/spacer.gif">
		<!--<![endif]-->

		<!-- HERE START YOUR CODE -->
			${choosenCode}
		<!-- HERE FINISH YOUR CODE -->	
	</body>
	</html>`;

	return finalCode;
}

function copyToClipboard() {
	copyCode.setAttribute("data-clipboard-text", finalCode);
	copyCode.textContent = "COPIED! :)";
	setTimeout(() => {
		copyCode.textContent = "Copy to Clipboard!";
	}, 1000);
}

function addedText(event) {
	let oldText = event.textContent;
	let oldBG = event.style.backgroundColor;
	event.style.backgroundColor = "#709078";
	event.textContent = "ADDED! :)";
	setTimeout(() => {
		event.textContent = oldText;
		event.style.backgroundColor = oldBG;
	}, 1000);
}
