import React, { useState } from "react";
import "./App.css";
import Toolbar from "./Toolbar.js"

function App() {
	const [travelExpenses, setTravelExpenses] = useState(19);
	const [officeCosts, setOfficeCosts] = useState(2000);
	const [travelDistance, setTravelDistance] = useState(30);
	const [workingDays, setWorkingDays] = useState(5);
	const [numberEmployees, setNumberEmployees] = useState(1);
	const [vacationDays, setVacationDays] = useState(25);

	const travelExpensesInEuros = travelExpenses / 100;
	const dailyTravelDistance = travelDistance * 2;
	const totalTravelDistance = dailyTravelDistance * workingDays * (52 - vacationDays / workingDays);
	const totalOfficeCosts = officeCosts * 12;

	// totalExpenses = 60km per dag * 5 dagen * 52 weken * 0.19
	const totalExpenses =
		numberEmployees * (totalTravelDistance * travelExpensesInEuros);
	const totalExpensesInclOffice = totalExpenses + totalOfficeCosts;

	const getCar = (costs) => {
		if (totalExpensesInclOffice < 80000) {
			return "BMW 1-serie!";
		} else if (
			totalExpensesInclOffice >= 80000 &&
			totalExpensesInclOffice < 190000
		) {
			return "BMW X5";
		} else if (
			totalExpensesInclOffice >= 190000 &&
			totalExpensesInclOffice < 500000
		) {
			return "Ferrari 458";
		} else if (totalExpensesInclOffice >= 500000) {
			return "Pagani";
		}
	};

	function ifStatement(costs) {
		const rightNow = getCar(costs);
		let imageURL = "";

		if (rightNow === "BMW 1-serie!") {
			imageURL =
				"https://s1.cdn.autoevolution.com/images/testdrive2_chapters/2013-bmw-m135i-xdrive-test-drive-1.jpg";
		} else if (rightNow === "BMW X5") {
			imageURL =
				"https://besthqwallpapers.com/Uploads/3-10-2019/107219/thumb2-2020-bmw-x5-m-competition-front-view-exterior-blue-suv.jpg";
		} else if (rightNow === "Ferrari 458") {
			imageURL = "https://media.autoweek.nl/m/m1my59hbq7cr_800.jpg";
		} else if (rightNow === "Pagani") {
			imageURL =
				"https://static.autoblog.nl/images/wp2019/pagani-huayra-roadster-bc-csr-racing-2-game-2019-001.jpg";
		}

		return (
			<div>
				<div>
					<h2>
						Because your employees are working remote, you saved{" "}
						<strong>€{Math.round(totalExpensesInclOffice)}</strong> and can now
						buy this:
					</h2>
					<img alt="cars" class="responsive" src={imageURL} />
				</div>
			</div>
		);
	}

	return (
		<div className="App">
			<title>SAVE MONEY</title>
      <Toolbar />
			<main>
				<div className="sizer main-content">
					<form>
						<h2>Tell me about your business</h2>
						<div className="card">
							<div className="input-group">
								<label htmlFor="number-employees">
									<span>Number of employees:</span>
								</label>
								<input
									id="number-employees"
									min="1"
									max="1000"
									type="range"
									value={numberEmployees}
									onChange={(e) => setNumberEmployees(e.target.value)}
								/>
								<input
									className="value"
									value={numberEmployees}
									type="number"
									min="1"
									max="1000"
									onChange={(e) => setNumberEmployees(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="working-days">
									<span>Days per week your employees work:</span>
								</label>
								<input
									id="working-days"
									min="1"
									max="7"
									type="range"
									value={workingDays}
									onChange={(e) => setWorkingDays(e.target.value)}
								/>
								<input
									className="value"
									value={workingDays}
									type="number"
									min="1"
									max="7"
									onChange={(e) => setWorkingDays(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="vacation-days">
									<span>Number of vacationdays:</span>
								</label>
								<input
									id="vacation-days"
									min="0"
									max="50"
									type="range"
									value={vacationDays}
									onChange={(e) => setVacationDays(e.target.value)}
								/>
								<input
									className="value"
									value={vacationDays}
									type="number"
									min="0"
									max="50"
									onChange={(e) => setVacationDays(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="reiskosten">
									<span>Travelexpenses (in Eurocents):</span>
								</label>
								<input
									id="reiskosten"
									min="19"
									max="50"
									type="range"
									value={travelExpenses}
									onChange={(e) => setTravelExpenses(e.target.value)}
								/>
								<input
									className="value"
									value={travelExpenses}
									type="number"
									min="19"
									max="50"
									onChange={(e) => setTravelExpenses(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="travel-distance">
									<span>Traveldistance on average per employee (in km):</span>
								</label>
								<input
									id="travel-distance"
									min="1"
									max="200"
									type="range"
									value={travelDistance}
									onChange={(e) => setTravelDistance(e.target.value)}
								/>
								<input
									className="value"
									value={travelDistance}
									type="number"
									min="1"
									max="200"
									onChange={(e) => setTravelDistance(e.target.value)}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="office-costs">
									<span>Office costs per month (in Euros):</span>
								</label>
								<input
									id="office-costs"
									min="0"
									max="10000"
									type="range"
									value={officeCosts}
									onChange={(e) => setOfficeCosts(e.target.value)}
								/>
								<input
									className="value"
									value={officeCosts}
									type="number"
									min="0"
									max="10000"
									onChange={(e) => setOfficeCosts(e.target.value)}
								/>
							</div>
						</div>
					</form>
          <div className="blocks">
            <h2>Letting your employees work from home will save you:</h2>
            <div className="block card">
              <h3>You'll save in travelexpenses alone:</h3>
              <dl>
                <dt>
                  {numberEmployees} employee(s) * {dailyTravelDistance} km ⨉{" "}
                  {workingDays} days x 52 weeks x €
                  {travelExpensesInEuros} =
                </dt>
                <dd>€{Math.round(totalExpenses)} per year</dd>
              </dl>
            </div>
            <div className="block card">
            <h3>And including office costs:</h3>
                <dl>
                  <dt>
                    {numberEmployees} employee(s) * {dailyTravelDistance} km ⨉{" "}
                    {workingDays} days x €{travelExpensesInEuros} +{" "}
                    {totalOfficeCosts} =
                  </dt>
                  <dd>€{Math.round(totalExpensesInclOffice)} per year</dd>
                </dl>
            </div>
            <div className="block card">
							<h3>Or to make it a bit more attractive for you as a boss:</h3>
							{ifStatement()}
						</div>
          </div>
				</div>
			</main>
		</div>
	);
}

export default App;
