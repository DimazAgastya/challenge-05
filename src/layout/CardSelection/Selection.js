import React from "react";
import style from "./selection.module.css";
import shareStyle from "../Default/default.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
	return (
		<>
			<div className={`container-lg ${style.details_container}`}>
				<div className="row">
					<div className="col-12 col-md-7 col-xl-8">
						<div className={`${style.main_info} shadow-lg rounded-3`}>
							<div className={style.packet_info}>
								<h6 className={shareStyle.text_bold}>Tetang Paket</h6>
								<p className={`${shareStyle.text_reguler} ${style.main_include}`}>Include</p>
								<li className={shareStyle.text}>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
								<li className={shareStyle.text}>Sudah termasuk bensin selama 12 jam</li>
								<li className={shareStyle.text}>Sudah termasuk Tiket Wisata</li>
								<li className={shareStyle.text}>Sudah termasuk pajak</li>
								<p className={shareStyle.text}>Exclude</p>
								<li className={shareStyle.text}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={shareStyle.text}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={shareStyle.text}>Tidak termasuk akomodasi penginapan</li>
							</div>
							<div className={style.other_info}>
								<h6 className={shareStyle.text_bold}>Refund, Reschedule, Overtime</h6>
								<li className={shareStyle.text}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={shareStyle.text}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={shareStyle.text}>Tidak termasuk akomodasi penginapan</li>
								<li className={shareStyle.text}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={shareStyle.text}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={shareStyle.text}>Tidak termasuk akomodasi penginapan</li>
								<li className={shareStyle.text}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
								<li className={shareStyle.text}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
								<li className={shareStyle.text}>Tidak termasuk akomodasi penginapan</li>
							</div>
						</div>
						<div className={`${style.details_btn} justify-content-end text-sm-start text-md-end`}>
							<Link to="/Payment">
								<button className={shareStyle.buttons}>Lanjutkan Pembayaran</button>
							</Link>
						</div>
					</div>
					<div className={`card ${style.details_car_card} col-12 col-md-5 col-xl-4 shadow-lg`}>
						<div className="text-center">
							<img src="/image/icons/cars.svg" className={style.details_car_image} alt="..." />
						</div>
						<div className={`card-body ${style.details_card_body}`}>
							<p className={shareStyle.text_bold}>Nama / tipe Mobil</p>
							<div className={`d-flex ${style.details_car_info}`}>
								<div className={`${style.details_first_info} d-flex`}>
									<img src="/image/icons/users.svg" alt="" className={style.details_users_icon} />
									<p className={shareStyle.text}>4 orang</p>
								</div>
								<div className={`${style.details_second_info} d-flex`}>
									<img src="/image/icons/settings.svg" alt="" className={style.details_setting_icon} />
									<p className={shareStyle.text}>Manual</p>
								</div>
								<div className={`${style.details_third_info} d-flex`}>
									<img src="/image/icons/calendar.svg" alt="" className={style.details_calender_icon} />
									<p className={shareStyle.text}>Tahun 2020</p>
								</div>
							</div>
						</div>
						<div className={style.details_total_price}>
							<div className="d-flex justify-content-between">
								<h6 className={shareStyle.text}>Total</h6>
								<p className={shareStyle.text_bold}>430.000</p>
							</div>
						</div>
						<Link to="/Payment" className="d-grid gap-2">
							<button className={`${shareStyle.buttons}  ${style.search_car_btn}`}>Lanjutkan Pembayaran </button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
