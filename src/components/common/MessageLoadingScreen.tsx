const MessageLoadingScreen = () => {
  const randomWidth = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min); // Random width between 50 and 150
  const numberOfUsers = 5;

  return (
    <div className="flex gap-4 flex-col">
      {Array.from({ length: numberOfUsers }).map(() => (
        <div className="flex gap-4">
          <div className={`bg-HoverText h-10 w-10 rounded-full ml-1 `}></div>
          <div className="">
            <div>
              <div className="flex">
                <div
                  className={`bg-HoverText h-5 rounded-2xl mb-1`}
                  style={{ width: `${randomWidth(60, 150)}px` }}
                ></div>
              </div>
              {Array.from({ length: randomWidth(1, 69) }).map(() => (
                // Horrizontal messages
                <div className="flex py-1 gap-2">
                  {Array.from({
                    length: Math.floor(Math.random() * 5 + 1),
                  }).map(() => (
                    // Vertical Message
                    <>
                      <div
                        className={`bg-HoverText h-5 rounded-2xl`}
                        style={{ width: `${randomWidth(50, 150)}px` }}
                      ></div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageLoadingScreen;
