import scipy.io.wavfile as wav
import numpy as np

def wav_to_sound_array(file_path):
    # Read the WAV file
    sample_rate, data = wav.read(r'C:\Users\GEORGIE\Dropbox\UDEMY\Web_Development_Udemy\NODE\2.4 QR Code Project\Sequence03_G711.org_.wav')

    # Convert to a sound array normalized between -1 and 1
    sound_array = np.array(data, dtype=np.float32) / 32768.0

    return sample_rate, sound_array

if __name__ == "__main__":
    # Replace 'your_wav_file.wav' with the path to your WAV file
    wav_file_path = "your_wav_file.wav"

    try:
        sample_rate, sound_array = wav_to_sound_array(wav_file_path)
        print("Sample rate:", sample_rate)
        print("Sound array shape:", sound_array.shape)
        print("Sound array:", sound_array)
    except Exception as e:
        print("Error:", e)
