import re

file_path = "src/views/public/AboutView.jsx"
with open(file_path, "r") as f:
    content = f.read()

target = """stand the test of time.
          </p>
        </div>"""

replacement = """stand the test of time.
          </p>

          <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-[#c9a84c]/10 to-transparent border-l-4 border-[#c9a84c] shadow-[0_0_15px_rgba(201,168,76,0.1)]">
            <p className="text-white font-medium text-lg flex items-center gap-3 tracking-wide">
              <Award className="w-6 h-6 text-[#c9a84c] shrink-0" />
              <span>I am proud to say that I am a student of <strong className="text-[#c9a84c] font-black uppercase">MANIKANDAN A</strong>.</span>
            </p>
          </div>
        </div>"""

if target in content:
    content = content.replace(target, replacement)
    with open(file_path, "w") as f:
        f.write(content)
        print("Successfully updated AboutView.jsx")
else:
    print("Could not find the target string!")

