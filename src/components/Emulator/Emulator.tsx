import { CPU } from "@aloeminium108/risc-v-emulator/dist/cpu"
import React, { FunctionComponent, useRef, useState } from "react"
import '../../styles/Emulator.scss'

type Props = { 
  binary: ArrayBuffer
}

function extendBinary(binary: ArrayBuffer, size: number){
  const extendedBin = new ArrayBuffer(size);
  new Uint8Array(extendedBin).set(new Uint8Array(binary));
  return extendedBin;
}

const Emulator: FunctionComponent<Props> = (props) => {

  const emulatorRef = useRef<CPU>(new CPU(extendBinary(props.binary, 1024), 0));

  const [ complete, setComplete ] = useState<boolean>(false);

  const [ registerSet, setRegisterSet ] = useState<{
    pc: number,
    ra: number,
    sp: number,
    gp: number,
    tp: number,
    t0: number,
    t1: number,
    t2: number,
    s0: number,
    s1: number,
    a0: number,
    a1: number,
    a2: number,
    a3: number,
    a4: number,
    a5: number,
    a6: number,
    a7: number,
    s2: number,
    s3: number,
    s4: number,
    s5: number,
    s6: number,
    s7: number,
    s8: number,
    s9: number,
    s10: number,
    s11: number,
    t3: number,
    t4: number,
    t5: number,
    t6: number,
  }>({
    pc: emulatorRef.current.pc,
    ra: emulatorRef.current.registerSet.getRegister(1),
    sp: emulatorRef.current.registerSet.getRegister(2),
    gp: emulatorRef.current.registerSet.getRegister(3),
    tp: emulatorRef.current.registerSet.getRegister(4),
    t0: emulatorRef.current.registerSet.getRegister(5),
    t1: emulatorRef.current.registerSet.getRegister(6),
    t2: emulatorRef.current.registerSet.getRegister(7),
    s0: emulatorRef.current.registerSet.getRegister(8),
    s1: emulatorRef.current.registerSet.getRegister(9),
    a0: emulatorRef.current.registerSet.getRegister(10),
    a1: emulatorRef.current.registerSet.getRegister(11),
    a2: emulatorRef.current.registerSet.getRegister(12),
    a3: emulatorRef.current.registerSet.getRegister(13),
    a4: emulatorRef.current.registerSet.getRegister(14),
    a5: emulatorRef.current.registerSet.getRegister(15),
    a6: emulatorRef.current.registerSet.getRegister(16),
    a7: emulatorRef.current.registerSet.getRegister(17),
    s2: emulatorRef.current.registerSet.getRegister(18),
    s3: emulatorRef.current.registerSet.getRegister(19),
    s4: emulatorRef.current.registerSet.getRegister(20),
    s5: emulatorRef.current.registerSet.getRegister(21),
    s6: emulatorRef.current.registerSet.getRegister(22),
    s7: emulatorRef.current.registerSet.getRegister(23),
    s8: emulatorRef.current.registerSet.getRegister(24),
    s9: emulatorRef.current.registerSet.getRegister(25),
    s10: emulatorRef.current.registerSet.getRegister(26),
    s11: emulatorRef.current.registerSet.getRegister(27),
    t3: emulatorRef.current.registerSet.getRegister(28),
    t4: emulatorRef.current.registerSet.getRegister(29),
    t5: emulatorRef.current.registerSet.getRegister(30),
    t6: emulatorRef.current.registerSet.getRegister(31)
  });

  const executeProgram = () => {
    emulatorRef.current.executionStep();
    setRegisterSet({
      pc: emulatorRef.current.pc,
      ra: emulatorRef.current.registerSet.getRegister(1),
      sp: emulatorRef.current.registerSet.getRegister(2),
      gp: emulatorRef.current.registerSet.getRegister(3),
      tp: emulatorRef.current.registerSet.getRegister(4),
      t0: emulatorRef.current.registerSet.getRegister(5),
      t1: emulatorRef.current.registerSet.getRegister(6),
      t2: emulatorRef.current.registerSet.getRegister(7),
      s0: emulatorRef.current.registerSet.getRegister(8),
      s1: emulatorRef.current.registerSet.getRegister(9),
      a0: emulatorRef.current.registerSet.getRegister(10),
      a1: emulatorRef.current.registerSet.getRegister(11),
      a2: emulatorRef.current.registerSet.getRegister(12),
      a3: emulatorRef.current.registerSet.getRegister(13),
      a4: emulatorRef.current.registerSet.getRegister(14),
      a5: emulatorRef.current.registerSet.getRegister(15),
      a6: emulatorRef.current.registerSet.getRegister(16),
      a7: emulatorRef.current.registerSet.getRegister(17),
      s2: emulatorRef.current.registerSet.getRegister(18),
      s3: emulatorRef.current.registerSet.getRegister(19),
      s4: emulatorRef.current.registerSet.getRegister(20),
      s5: emulatorRef.current.registerSet.getRegister(21),
      s6: emulatorRef.current.registerSet.getRegister(22),
      s7: emulatorRef.current.registerSet.getRegister(23),
      s8: emulatorRef.current.registerSet.getRegister(24),
      s9: emulatorRef.current.registerSet.getRegister(25),
      s10: emulatorRef.current.registerSet.getRegister(26),
      s11: emulatorRef.current.registerSet.getRegister(27),
      t3: emulatorRef.current.registerSet.getRegister(28),
      t4: emulatorRef.current.registerSet.getRegister(29),
      t5: emulatorRef.current.registerSet.getRegister(30),
      t6: emulatorRef.current.registerSet.getRegister(31)
    });
    if (emulatorRef.current.pc >= props.binary.byteLength) {
      setComplete(true);
      return;
    }
  }

  const resetEmulator = () => {
    emulatorRef.current = new CPU(extendBinary(props.binary, 1024), 0);
    setComplete(false);
    setRegisterSet({
      pc: emulatorRef.current.pc,
      ra: emulatorRef.current.registerSet.getRegister(1),
      sp: emulatorRef.current.registerSet.getRegister(2),
      gp: emulatorRef.current.registerSet.getRegister(3),
      tp: emulatorRef.current.registerSet.getRegister(4),
      t0: emulatorRef.current.registerSet.getRegister(5),
      t1: emulatorRef.current.registerSet.getRegister(6),
      t2: emulatorRef.current.registerSet.getRegister(7),
      s0: emulatorRef.current.registerSet.getRegister(8),
      s1: emulatorRef.current.registerSet.getRegister(9),
      a0: emulatorRef.current.registerSet.getRegister(10),
      a1: emulatorRef.current.registerSet.getRegister(11),
      a2: emulatorRef.current.registerSet.getRegister(12),
      a3: emulatorRef.current.registerSet.getRegister(13),
      a4: emulatorRef.current.registerSet.getRegister(14),
      a5: emulatorRef.current.registerSet.getRegister(15),
      a6: emulatorRef.current.registerSet.getRegister(16),
      a7: emulatorRef.current.registerSet.getRegister(17),
      s2: emulatorRef.current.registerSet.getRegister(18),
      s3: emulatorRef.current.registerSet.getRegister(19),
      s4: emulatorRef.current.registerSet.getRegister(20),
      s5: emulatorRef.current.registerSet.getRegister(21),
      s6: emulatorRef.current.registerSet.getRegister(22),
      s7: emulatorRef.current.registerSet.getRegister(23),
      s8: emulatorRef.current.registerSet.getRegister(24),
      s9: emulatorRef.current.registerSet.getRegister(25),
      s10: emulatorRef.current.registerSet.getRegister(26),
      s11: emulatorRef.current.registerSet.getRegister(27),
      t3: emulatorRef.current.registerSet.getRegister(28),
      t4: emulatorRef.current.registerSet.getRegister(29),
      t5: emulatorRef.current.registerSet.getRegister(30),
      t6: emulatorRef.current.registerSet.getRegister(31)
    });
  }

  return (
    <div id="emulator">
      <div id="register-display">
        <h2>Registers</h2>
        <div>
          <p>pc: {registerSet.pc}</p>
        </div>
        <div>
          <p>ra: {registerSet.ra}</p>
          <p>sp: {registerSet.sp}</p>
          <p>gp: {registerSet.gp}</p>
          <p>tp: {registerSet.tp}</p>
        </div>
        <div>
          <p>t0: {registerSet.t0}</p>
          <p>t1: {registerSet.t1}</p>
          <p>t2: {registerSet.t2}</p>
          <p>t3: {registerSet.t3}</p>
          <p>t4: {registerSet.t4}</p>
          <p>t5: {registerSet.t5}</p>
          <p>t6: {registerSet.t6}</p>
        </div>
        <div>
          <p>s0: {registerSet.s0}</p>
          <p>s1: {registerSet.s1}</p>
          <p>s2: {registerSet.s2}</p>
          <p>s3: {registerSet.s3}</p>
          <p>s4: {registerSet.s4}</p>
          <p>s5: {registerSet.s5}</p>
          <p>s6: {registerSet.s6}</p>
          <p>s7: {registerSet.s7}</p>
          <p>s8: {registerSet.s8}</p>
          <p>s9: {registerSet.s9}</p>
          <p>s10: {registerSet.s10}</p>
          <p>s11: {registerSet.s11}</p>
        </div>
        <div>
          <p>a0: {registerSet.a0}</p>
          <p>a1: {registerSet.a1}</p>
          <p>a2: {registerSet.a2}</p>
          <p>a3: {registerSet.a3}</p>
          <p>a4: {registerSet.a4}</p>
          <p>a5: {registerSet.a5}</p>
          <p>a6: {registerSet.a6}</p>
          <p>a7: {registerSet.a7}</p>
        </div>
      </div>
      {complete ? 
        <button disabled>Execution Step</button> :
        <button onClick={executeProgram}>Execution Step</button>
      }
      <button onClick={resetEmulator}>Reset</button>
    </div>
  );
}

export default Emulator;