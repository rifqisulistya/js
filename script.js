/* ******** ADT JAM dalam JavaScript ******** */

	/* KELOMPOK VALIDASI TERHADAP TIPE */
	function IsJamValid (HH, MM, SS) {
		return ((HH>=0)&&(HH<=23)&&(MM>=0)&&(MM<=59)&&(SS>=0)&&(SS<=59));
	}
	//Mengirim true jika H,M,S dapat membentuk J yang valid

	/* Konstruktor: Membentuk sebuah JAM dari komponen-komponennya */
	function MakeJAM (HH, MM, SS) {
		J: JAM;
		SetHH(J,HH);
		SetMM(J,MM);
		SetSS(J,SS) ;
		return J;
	}
	//Membentuk sebuah JAM dari komponen-komponennya yang valid

	/* Selektor: Get dan Set */
	function GetHour(J) {
		return J.HH;
	} 
	//Mengirimkan bagian HH (Hour) dari JAM
	function GetMinute(J) {
		return J.MM;
	}
	//Mengirimkan bagian MM (Minute) dari JAM	
	function GetSecond(J) {
		return J.SS;
	}	
	//Mengirimkan bagian SS (Second) dari JAM	

	/* PENGUBAH NILAI KOMPONEN */
	function SetHH (J,NewHH) {
		J.HH = NewHH;
	}	
	//Mengubah nilai komponen HH dari J
	function SetMM (J,NewMM) {
		J.MM = NewMM;
	}
	//Mengubah nilai komponen MM dari J
	function SetSS (J,NewSS) {
		J.SS = NewSS;
	}
	//Mengubah nilai komponen SS dari J


	/* KELOMPOK KONVERSI TERHADAP TYPE */
	function JamToDetik (JAM J) {
		return GetHour(J)*3600 + GetMinute(J)*60 + GetSecond(J);
	}
	//Diberikan sebuah JAM, mengkonversi menjadi Detik

	function DetikToJam (N) {
		if (N<0) {
			N=86400+N;
		} else {
			N=N%86400;
		}
		SetHH(J,N/3600);
		SetMM(J,(N%3600)/60);
		SetSS(J,(N%60));
		return J;
	}
	//Mengirim konversi detik ke JAM

	/* KELOMPOK OPERASI TERHADAP TYPE */
	function JEQ (J1, J2) {
		return JamToDetik(J1)==JamToDetik(J2);
	} //Mengirim true jika J1=J2
	function JNEQ (J1, J2) {
		return JamToDetik(J1)!=JamToDetik(J2);
	} //Mengirim true jika J1!=J2
	function JLT (J1, J2) {
		return JamToDetik(J1)<JamToDetik(J2);
	} //Mengirim true jika J1<J2
	function JGT (J1, J2) {
		return JamToDetik(J1)>JamToDetik(J2);
	} //Mengirim true jika J1>J2

	/* OPERATOR ARITMATIKA JAM */


	function JPlus (J1, J2) {
		return DetikToJam(JamToDetik(J1)+JamToDetik(J2));
	}
	//Menghasilkan J1+J2, dalam bentuk JAM
	function JMinus (J1, J2) {
		return DetikToJam(JamToDetik(J1)-JamToDetik(J2));
	}
	//Menghasilkan J1-J2, dalam bentuk JAM
	function NextDetik (J) {
		return DetikToJam((JamToDetik(J))+1);
	}
	//Mengirim 1 detik setelah J dalam bentuk JAM
	function NextNDetik (J, N) {
		return DetikToJam(JamToDetik(J)+N);
	}
	//Mengirim N detik setelah J dalam bentuk JAM
	function PrevDetik (J) {
		return DetikToJam((JamToDetik(J))-1);
	}
	//Mengirim 1 detik sebelum J dalam bentuk JAM
	function PrevNDetik (J, N) {
		return DetikToJam(JamToDetik(J)-N);
	}
	//Mengirim N detik sebelum J dalam bentuk JAM
	function Durasi (Jaw, Jakh) {
		return JamToDetik(Jakh)-JamToDetik(Jaw);
	}
	//Mengirim Jakh-Jaw dalam detik, dengan kalkulasi hasilnya negatif jika Jaw > JAkhir

/*  ******** Akhir dari Program ADT JAM dalam JavaScript ******** */




/* CATATAN PEMBELAJARAN DI KELAS */
function tambahujung(sebuahArray,elementtambah) {
	sebuahArray.push(elementtambah)
		
	console.log (sebuahArray)
}

function arr(sebuahArray) {
	for (var i = 0; i < sebuahArray.length; i++) {
		if (sebuahArray[i] % 2 != 0) {
			console.log (sebuahArray[i])
		}
	}
}



