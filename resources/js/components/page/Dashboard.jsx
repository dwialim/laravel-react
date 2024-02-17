import React from 'react'

function Dashboard() {
	const height = {height: "4px"}
	const width = {width: "55%"}

	return (
		<div className="page-wrapper">
			<div className="page-content">
				<div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
					<div className="col">
						<div className="card radius-10 ">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<h5 className="mb-0 text-primary">9526</h5>
									<div className="ms-auto">
										<i className='bx bx-cart fs-3 text-primary'></i>
									</div>
								</div>
								<div className="progress my-2" style={height}>
									<div className="progress-bar bg-primary" role="progressbar" style={width} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="d-flex align-items-center">
									<p className="mb-0">Total Orders</p>
									<p className="mb-0 ms-auto">+4.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<h5 className="mb-0 text-success">$8323</h5>
									<div className="ms-auto">
										<i className='bx bx-dollar fs-3 text-success'></i>
									</div>
								</div>
								<div className="progress my-2" style={height}>
									<div className="progress-bar bg-success" role="progressbar" style={width} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="d-flex align-items-center">
									<p className="mb-0">Total Revenue</p>
									<p className="mb-0 ms-auto">+1.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<h5 className="mb-0 text-danger">6200</h5>
									<div className="ms-auto">
										<i className='bx bx-group fs-3 text-danger'></i>
									</div>
								</div>
								<div className="progress my-2" style={height}>
									<div className="progress-bar bg-danger" role="progressbar" style={width} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="d-flex align-items-center">
									<p className="mb-0">Visitors</p>
									<p className="mb-0 ms-auto">+5.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card radius-10">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<h5 className="mb-0 text-warning">5630</h5>
									<div className="ms-auto">
										<i className='bx bx-envelope fs-3 text-warning'></i>
									</div>
								</div>
								<div className="progress my-2" style={height}>
									<div className="progress-bar bg-warning" role="progressbar" style={width} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="d-flex align-items-center">
									<p className="mb-0">Messages</p>
									<p className="mb-0 ms-auto">+2.2%<span><i className='bx bx-up-arrow-alt'></i></span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard