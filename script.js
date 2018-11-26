/* ********Membuat class Jam di Javascript******** */

/* Konstruktor: Membentuk sebuah JAM dari komponen-komponennya */
class Jam {
	constructor(_HH, _MM, _SS)	{
		this.HH = _HH;
		this.MM = _MM;
		this.SS = _SS;
		//Membentuk sebuah JAM dari komponen-komponennya yang valid
	}
	/* Selektor */
	/* PENGUBAH NILAI KOMPONEN */
	SetHH(NewHH) {
		this.HH = NewHH;
		//Mengubah nilai komponen HH dari Jam
	}	
	SetMM(NewMM) {
		this.MM = NewMM;
		//Mengubah nilai komponen MM dari Jam
	}
	SetSS(NewSS) {
		this.SS = NewSS;
		//Mengubah nilai komponen SS dari Jam
	}
	GetHour() {
		return this.HH;
		//Mengirimkan bagian HH (Hour) dari Jam
	}
	GetMinute() {
		return this.MM;
		//Mengirimkan bagian MM (Minute) dari Jam
	}
	GetSecond() {
		return this.SS;
		//Mengirimkan bagian SS (Second) dari Jam
	}
	/* KELOMPOK VALIDASI TERHADAP TIPE */
	IsJamValid() {
		return ((this.SS>=0&&this.SS<=59) && (this.MM>=0 && this.MM<=59) && (this.HH>=0 && this.HH<=23))
		//Mengirim true jika HH,MM,SS dapat membentuk Jam yang valid
	}
	/* KELOMPOK KONVERSI TERHADAP TYPE */
	JamToDetik() {
		return this.HH*3600 + this.MM*60 + this.SS;
		//Diberikan sebuah Jam, mengkonversi menjadi Detik
	}
	DetikToJam(N) {
		if (N<0) {
			N=0;
		} else {
			N=N%86400;
		}
		this.SetHH(Math.floor(N/3600));
		this.SetMM(Math.floor((N%3600)/60));
		this.SetSS((N%60));
		//Mengirim konversi detik ke JAM
	}	
	/* KELOMPOK OPERASI TERHADAP TYPE */
	JEQ(jam) {
		return this.JamToDetik() == jam.JamToDetik();
		//Mengirim true jika J1=J2
	}
	JNEQ(jam) {
		return this.JamToDetik() != jam.JamToDetik();
		//Mengirim true jika J1!=J2
	}
	JLT(jam) {
		return this.JamToDetik() < jam.JamToDetik();
		//Mengirim true jika J1<J2
	}
	JGT(jam) {
		return this.JamToDetik() > jam.JamToDetik();
		//Mengirim true jika J1>J2
	}
	/* OPERATOR ARITMATIKA JAM */
	JPlus(jam) {
		return this.DetikToJam(this.JamToDetik()+jam.JamToDetik());
		//Menghasilkan J1+J2, dalam bentuk Jam
	}
	JMinus(jam) {
		return this.DetikToJam(this.JamToDetik()-jam.JamToDetik());
		//Menghasilkan J1-J2, dalam bentuk JAM
	}
	NextDetik () {
		return this.DetikToJam((this.JamToDetik())+1);
		//Mengirim 1 detik setelah this dalam bentuk Jam
	}
	NextNDetik (N) {
		return this.DetikToJam((this.JamToDetik())+N);
		//Mengirim N detik setelah this dalam bentuk Jam
	}
	PrevDetik () {
		return this.DetikToJam((this.JamToDetik())-1);
		//Mengirim 1 detik sebelum this dalam bentuk Jam
	}
	PrevNDetik (N) {
		return this.DetikToJam(this.JamToDetik()-N);
		//Mengirim N detik sebelum this dalam bentuk Jam
	}
	Durasi (jam) {
		return this.JamToDetik()-jam.JamToDetik();
		//Mengirim Jakh-Jaw dalam detik, dengan kalkulasi hasilnya negatif jika Jaw > JAkhir
	}
}

/*  ******** Akhir dari Program ADT JAM dalam JavaScript ******** */



