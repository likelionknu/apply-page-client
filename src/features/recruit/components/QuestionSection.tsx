function QestionSection() {
  return (
    <section className="relative flex flex-col justify-start">
      <label className="tracking-tight-custom text-[32px] leading-140 font-bold">
        Q. the good man is not good man
      </label>
      <textarea
        placeholder="나는 문어 꿈을 꾸는 문어"
        className="recruit-box mt-12 h-[300px] resize-none px-11.5 py-10 text-[30px]"
      />
      <div className="tracking-tight-custom absolute right-8.5 bottom-6 text-[30px] leading-140 font-semibold">
        0/N
      </div>
    </section>
  );
}

export default QestionSection;
