import React from "react";
import style from "./card.module.css";
import shareStyle from "../Default/default.module.css";
import { Link } from "react-router-dom";

const CardGroup = () => {
	return (
		<>
			<div className="container-fluid">
				<div className={`row justify-content-sm-start justify-content-md-center ${style.search_car_container}`}>
					<div className={`card ${style.search_car_card} col-12 col-md-6 col-lg-3`}>
						<img src="/image/icons/cars.svg" className={style.search_car_image} alt="..." />
						<div className={`${style.card_text}card-body`}>
							<p className={`${shareStyle.text_reguler} ${style.search_text_type} `}>Nama/tipe Mobil</p>
							<h6 className={`${shareStyle.text_bold} ${style.search_text_price}`}>Rp 430.000/hari</h6>
							<p className={`${shareStyle.text} ${style.search_card_text} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<div className={`${style.first_info} d-flex`}>
								<img src="/image/icons/users.svg" alt="" className={style.key_icon} />
								<p className="text">4 orang</p>
							</div>
							<div className={`${style.second_info} d-flex`}>
								<img src="/image/icons/settings.svg" alt="" className={style.setting_icon} />
								<p className={shareStyle.text}>Manual</p>
							</div>
							<div className={`${style.third_info} d-flex`}>
								<img src="/image/icons/calendar.svg" alt="" className={style.calender_icon} />
								<p className={shareStyle.text}>Tahun 2020</p>
							</div>
						</div>
						<Link to="/Details" className="d-grid gap-2">
							<button className={`${shareStyle.buttons} ${style.search_car_btn}`}>Pilih Mobil</button>
						</Link>
					</div>
					<div className={`card ${style.search_car_card} col-12 col-md-6 col-lg-3`}>
						<img src="/image/icons/cars.svg" className={style.search_car_image} alt="..." />
						<div className={`${style.card_text}card-body`}>
							<p className={`${shareStyle.text_reguler} ${style.search_text_type} `}>Nama/tipe Mobil</p>
							<h6 className={`${shareStyle.text_bold} ${style.search_text_price}`}>Rp 430.000/hari</h6>
							<p className={`${shareStyle.text} ${style.search_card_text} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<div className={`${style.first_info} d-flex`}>
								<img src="/image/icons/users.svg" alt="" className={style.key_icon} />
								<p className="text">4 orang</p>
							</div>
							<div className={`${style.second_info} d-flex`}>
								<img src="/image/icons/settings.svg" alt="" className={style.setting_icon} />
								<p className={shareStyle.text}>Manual</p>
							</div>
							<div className={`${style.third_info} d-flex`}>
								<img src="/image/icons/calendar.svg" alt="" className={style.calender_icon} />
								<p className={shareStyle.text}>Tahun 2020</p>
							</div>
						</div>
						<Link to="/Details" className="d-grid gap-2">
							<button className={`${shareStyle.buttons} ${style.search_car_btn}`}>Pilih Mobil</button>
						</Link>
					</div>
					<div className={`card ${style.search_car_card} col-12 col-md-6 col-lg-3`}>
						<img src="/image/icons/cars.svg" className={style.search_car_image} alt="..." />
						<div className={`${style.card_text}card-body`}>
							<p className={`${shareStyle.text_reguler} ${style.search_text_type} `}>Nama/tipe Mobil</p>
							<h6 className={`${shareStyle.text_bold} ${style.search_text_price}`}>Rp 430.000/hari</h6>
							<p className={`${shareStyle.text} ${style.search_card_text} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<div className={`${style.first_info} d-flex`}>
								<img src="/image/icons/users.svg" alt="" className={style.key_icon} />
								<p className="text">4 orang</p>
							</div>
							<div className={`${style.second_info} d-flex`}>
								<img src="/image/icons/settings.svg" alt="" className={style.setting_icon} />
								<p className={shareStyle.text}>Manual</p>
							</div>
							<div className={`${style.third_info} d-flex`}>
								<img src="/image/icons/calendar.svg" alt="" className={style.calender_icon} />
								<p className={shareStyle.text}>Tahun 2020</p>
							</div>
						</div>
						<Link to="/Details" className="d-grid gap-2">
							<button className={`${shareStyle.buttons} ${style.search_car_btn} `}>Pilih Mobil</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardGroup;
